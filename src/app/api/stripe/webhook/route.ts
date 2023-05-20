import { NextApiRequest } from 'next';
import getRawBody from 'raw-body';
import { stripe } from '~/lib/stripe';

// @ts-ignore
export async function POST(request, response) {
  try {
    const rawBody = await getRawBody(request);
    const sig = request.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SIGNING_SECRET!
    );
    console.log(event);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      await fetch('http://localhost:3000/api/clerk/deduct-credits', {
        method: 'POST',
      });

      console.log(session);
      // Fulfill the purchase...
    }
  } catch (err) {
    console.error(err);
    return response.status(400).send(`Webhook Error: ${err}`);
  }
}

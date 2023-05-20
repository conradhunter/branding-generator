import getRawBody from 'raw-body';
import { stripe } from '~/lib/stripe';

// @ts-ignore
export async function POST(request, response) {
  let event;
  try {
    const rawBody = await getRawBody(request);
    const sig = request.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SIGNING_SECRET!
    );
    console.log(event);
  } catch (err) {
    console.error(err);
    return response.status(400).send(`Webhook Error: ${err}`);
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    await fetch('/api/clerk/deduct-credits', {
      method: 'GET',
    });

    console.log(session);
  }
}

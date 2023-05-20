import { NextApiRequest } from 'next';
import getRawBody from 'raw-body';
import { stripe } from '~/lib/stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: any, response: any) {
  try {
    const rawBody = await getRawBody(request);
    const sig = request.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SIGNING_SECRET!
    );
    console.log(event);
  } catch (err) {
    console.error(err);
    return response.status(400).send(`Webhook Error: ${err}`);
  }
}

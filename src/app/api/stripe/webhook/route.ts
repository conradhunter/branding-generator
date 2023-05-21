import { NextResponse } from 'next/server';
import { buffer } from 'node:stream/consumers';
import { stripe } from '~/lib/stripe';

export async function POST(req: any) {
  const rawBody = await buffer(req.body);
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      req.headers.get('stripe-signature') as string,
      process.env.STRIPE_WEBHOOK_SIGNING_SECRET as string
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: 'Webhook signature verification failed',
      },
      {
        status: 400,
      }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed':
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // have to return response promptly, ie without waiting for back-end process or stripe will potentially flag your account
  return NextResponse.json(
    { message: 'successfully received' },
    { status: 200 }
  );
}

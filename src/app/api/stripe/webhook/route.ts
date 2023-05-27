import { NextRequest, NextResponse } from 'next/server';
import { buffer } from 'node:stream/consumers';
import { stripe } from '~/lib/stripe';

export async function POST(request: any, response: NextResponse) {
  const rawBody = await buffer(request.body);
  let event: any;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      request.headers.get('stripe-signature') as string,
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

  if (event.type === 'checkout.session.completed') {
    // const reqUrl = new URL(request.url);

    console.log('✅ checkout session completed webhook received');

    await fetch(`https://brandinggeneratorai.com/api/clerk/add-credits`, {
      method: 'GET',
    });
    console.log('✅ credits added');
    return NextResponse.json(
      { message: 'successfully received' },
      { status: 200 }
    );
  }

  // have to return response promptly, ie without waiting for back-end process or stripe will potentially flag your account
  return NextResponse.json(
    { message: 'successfully received' },
    { status: 200 }
  );
}

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../../lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const createCheckout = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: process.env.CREDITS_PRODUCT_ID!,
          quantity: 1,
        },
      ],

      currency: 'usd',

      success_url: 'http://localhost:3000/generate/name',
      cancel_url: 'http://localhost:3000/',
    });

    return NextResponse.json({ url: createCheckout.url });
  } catch (err) {
    console.error((err as Error).message);

    return NextResponse.json(
      {
        error: (err as Error).message,
      },
      { status: 500 }
    );
  }
}

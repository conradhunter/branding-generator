import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
    typescript: true,
  });

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

      // success_url: 'http://localhost:3000/success',
      success_url: 'http://www.brandinggeneratorai.com/success',
      cancel_url: 'http://localhost:3000/cancel',
      allow_promotion_codes: true,
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

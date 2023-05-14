import Stripe from 'stripe';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
    typescript: true,
  });
  const prices = await stripe.prices.list({
    limit: 1,
  });

  return NextResponse.json(prices.data);
}

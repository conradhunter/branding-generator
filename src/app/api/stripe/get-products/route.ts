import { NextResponse } from 'next/server';
import { stripe } from '../../../../lib/stripe';
export async function GET(request: Request) {
  const prices = await stripe.prices.list({
    limit: 1,
  });

  return NextResponse.json(prices.data);
}

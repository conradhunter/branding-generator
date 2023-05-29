import { NextResponse } from 'next/server';
import { buffer } from 'node:stream/consumers';
import { stripe } from '~/lib/stripe';
import prisma from '~/utils/db/prismaInit';

export async function POST(request: any) {
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

  console.log('✅ Hit API route');

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('✅ checkout session completed webhook received');
      const addCreditsToUser = await prisma.user.update({
        where: {
          id: event.data.object.metadata.userId,
        },
        data: {
          credits: {
            increment: 100,
          },
        },
      });
      console.log('✅ credits added', addCreditsToUser);
      break;

    default:
      console.log(`❌ Unhandled event type', ${event.type}`);
      break;
  }

  return NextResponse.json(
    { message: 'successfully received' },
    { status: 200 }
  );
}

// if (event.type === 'checkout.session.completed') {
//     const reqUrl = new URL(request.url);

//     console.log('✅ checkout session completed webhook received');

//     await fetch(`${reqUrl.origin}/api/clerk/add-credits`, {
//       method: 'GET',
//     });

//     console.log('✅ credits added');
//     return NextResponse.json(
//       { message: 'successfully received' },
//       { status: 200 }
//     );
//   }

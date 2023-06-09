import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import prisma from '~/utils/db/prismaInit';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { userId } = auth();
    const userDeductedCredits = await prisma.user.update({
      where: {
        id: userId!,
      },
      data: {
        credits: {
          decrement: 5,
        },
      },
    });
    console.log('deducted credits', userDeductedCredits);
  } catch (err) {
    console.error('error deducting credits', err);
  }
  return NextResponse.json({ success: true });
}

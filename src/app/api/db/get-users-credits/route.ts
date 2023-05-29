import { NextResponse } from 'next/server';
import prisma from '~/utils/db/prismaInit';

export async function POST(req: any) {
  console.log('✅ Hit API route');
  const res = await req.json();

  const userId = res.userId;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    return NextResponse.json({ success: true, credits: user.credits });
  }

  return NextResponse.json({ status: 404, message: 'User not found' });
}

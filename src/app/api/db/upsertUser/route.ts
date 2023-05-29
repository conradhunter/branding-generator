import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import prisma from '~/utils/db/prismaInit';

export async function POST(req: any) {
  const res = await req.json();

  const userId = res.userId;

  const user = await clerkClient.users.getUser(userId);
  const email = user?.emailAddresses[0].emailAddress;

  const newUser = await prisma.user.upsert({
    where: { id: userId?.toString() }, // Choose either `id` or `email` as the unique identifier, not both.
    update: { email: email }, // This remains empty because we want to do nothing if the user exists.
    create: {
      id: userId?.toString(),
      email: email,
      credits: 5,
    },
  });

  return NextResponse.json({ success: true, user: newUser });
}

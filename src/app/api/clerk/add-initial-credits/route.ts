import { auth, currentUser } from '@clerk/nextjs';
import { User, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { userId } = auth();

  if (typeof userId !== 'string') return;

  const updatedUser = await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      credits: 5,
    },
  });

  return NextResponse.json({ success: true, user: updatedUser });
}

import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();
  if (typeof userId !== 'string') return;

  const user = await clerkClient.users.getUser(userId);
  const credits: any = user.publicMetadata.credits;

  try {
    const updatedUser = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        credits: credits + 100,
      },
    });
    NextResponse.json({ success: true, user: updatedUser });
    console.log('added credits');
  } catch (err) {
    console.error('error deducting credits', err);
  }
}

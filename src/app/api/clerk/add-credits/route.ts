import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('✅ Received request to add credits');

  const { userId } = auth();
  console.log('Got userId:', userId);

  if (typeof userId !== 'string') return;

  const user = await clerkClient.users.getUser(userId);
  console.log('Got user:', user);
  const credits: any = user.publicMetadata.credits;

  try {
    const updatedUser = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        credits: credits + 100,
      },
    });
    console.log('added credits');
    return NextResponse.json({ success: true, user: updatedUser });
  } catch (err) {
    console.error('error deducting credits', err);
  }
}

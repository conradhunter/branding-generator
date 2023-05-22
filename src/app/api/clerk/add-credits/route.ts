import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: any, res: any) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

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

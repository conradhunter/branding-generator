import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function PATCH(reponse: Response) {
  const user = await currentUser();

  const updatedUser = await clerkClient.users.updateUserMetadata(user?.id!, {
    publicMetadata: {
      name: 'John Doe',
    },
  });
  return NextResponse.json({ success: true, user: updatedUser });
}

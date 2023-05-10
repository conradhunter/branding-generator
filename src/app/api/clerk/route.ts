import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const user = await clerkClient.users.getUserList();
    
    return NextResponse.json({success: true, user: user})
}

// const userId = 'user_2OlWzS3YMSFW7hKMO3AUMo1rKbs'

// export async function PATCH(request: Request) {
//     await clerkClient.users.updateUserMetadata(userId, {
//         publicMetadata: {
//                 name: 'John Doe',
//         }
//     })

//     return NextResponse.json({success: true})
// }
import { clerkClient } from "@clerk/nextjs/dist/api";

export const updateCreditsMetadata = async () => {
    await clerkClient.users.updateUserMetadata('user_id', {
        publicMetadata: {
            credits: 10,
        }
    })
}
// (https://www.answeroverflow.com/m/1096538539895836803)

// *
// * 1. user signs up then calls backend function to update metadata.
// * 2. Webhook fires, update metadata to give initial 5 credits.
// * 3. send user straight to generate page to use their credits.
// * 4. user can see their credits in the UI.
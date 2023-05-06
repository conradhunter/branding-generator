import { clerkClient } from "@clerk/nextjs/server"

const userId = 'user_2OlWzS3YMSFW7hKMO3AUMo1rKbs'
const newMetadata = {
    credits: 469,
    updated: Date.now(),
}



const deductCredits = async () => {
    const user = await clerkClient.users.getUser(userId)
    console.log(user)
}
// (https://www.answeroverflow.com/m/1096538539895836803)

// *
// * 1. user signs up then calls backend function to update metadata.
// * 2. Webhook fires, update metadata to give initial 5 credits.
// * 3. send user straight to generate page to use their credits.
// * 4. user can see their credits in the UI.
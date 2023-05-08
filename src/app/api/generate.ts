import { Configuration, OpenAIApi } from 'openai';

export let imageUrl: string | undefined;
export let namesResponse: any
export let sloganResponse: any

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
  organization: 'org-pPpZQP6QHreKXJuAzPxRizq8'
});

const openai = new OpenAIApi(configuration);

async function deductCredits() {
  // get user credits
  // deduct credits
  // update user credits
  // return user credits
}

export async function generateSlogan(prompt: string, temperature: number) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    n: 1,
    max_tokens: 10,
    temperature: temperature,
  })

  sloganResponse = response;
  console.log(sloganResponse?.data.choices)
} 
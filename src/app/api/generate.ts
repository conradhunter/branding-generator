import { Configuration, OpenAIApi } from 'openai';


const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
  organization: 'org-pPpZQP6QHreKXJuAzPxRizq8'
});

const openai = new OpenAIApi(configuration);

export let imageUrl: string | undefined;

export async function generateLogo(logoPrompt: string, resolution: string) {

  const response = await openai.createImage({
    prompt: logoPrompt,
    n: 1,
    size: '256x256' || resolution,
  });
  imageUrl = response.data.data[0].url;

  // if res succesful, deduct credits from users metadata
  if (response.status === 200) {
    // deductCredits();
    console.log('deduct credits');
  }

  console.log(imageUrl);
  return imageUrl;
}


// TODO: Figure out how to send bearer token in request header


export async function generateBusinessName() {
  // call GPT AI to generate business name
} 
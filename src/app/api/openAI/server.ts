import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
  organization: 'org-pPpZQP6QHreKXJuAzPxRizq8'
});

const openai = new OpenAIApi(configuration);

export async function generateLogo() {

  const response = await openai.createImage({
    prompt: 'High-end premium modern logo of the letters "KATHY", featured on 99designs',
    n: 1,
    size: '256x256',
  });
  const imageUrl = response.data.data[0].url;
  console.log(imageUrl);
  return imageUrl;
}
// TODO: Figure out how to send bearer token in request header


export async function generateBusinessName() {
  // call GPT AI to generate business name
} 
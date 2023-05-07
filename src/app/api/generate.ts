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


let namesResponse: any
export async function generateBusinessName() {
  // call GPT AI to generate business name
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Generate a business name for a new company selling beanies & hats in a snow town',
    n: 10,
    max_tokens: 60,
    temperature: 0.9,
  })

  namesResponse = response;
  console.log(namesResponse?.data.choices)

  
} 
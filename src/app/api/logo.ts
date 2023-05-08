import { Configuration, OpenAIApi } from 'openai';

export let imageUrl: string | undefined;

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
    organization: 'org-pPpZQP6QHreKXJuAzPxRizq8'
  });
  
  const openai = new OpenAIApi(configuration);

export async function generateLogo(logoPrompt: string, resolution: string, deductCredits: () => void) {

    const response = await openai.createImage({
      prompt: logoPrompt,
      n: 1,
      size: '256x256' || resolution,
    });
    imageUrl = response.data.data[0].url;
  
    // if res succesful, deduct credits from users metadata
    if (response.status === 200) {
    //   deductCredits();
      console.log('deduct credits');
    } else {
      console.log('error deducting credits');
      console.error(response);
      return null
    }
  
    console.log(imageUrl);
    return imageUrl;
  }
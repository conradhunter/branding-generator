import { Configuration, OpenAIApi } from "openai";


export let namesResponse: any
export let sloganResponse: any
export let imageUrl: string | undefined;

export const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
  organization: process.env.NEXT_OPEN_AI_ORGANISATION || process.env.OPEN_AI_ORGANISATION
});
  
export const openai = new OpenAIApi(configuration);

export async function generateBusinessName(prompt: string, temperature: number) {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      n: 10,
      max_tokens: 10,
      temperature: temperature,
    })
  
    if (response.status === 200) {
      // deductCredits();
    //   handleDisplay(response)
      console.log('deduct credits');
    } else {
      console.log('error deducting credits');
      console.error(response);
    }
  
    namesResponse = response;
    console.log(namesResponse?.data.choices)
  } 

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

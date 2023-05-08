import { Configuration, OpenAIApi } from "openai";


export let namesResponse: any

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
    organization: 'org-pPpZQP6QHreKXJuAzPxRizq8'
  });
  
  const openai = new OpenAIApi(configuration);

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
      console.log('deduct credits');
    } else {
      console.log('error deducting credits');
      console.error(response);
    }
  
    namesResponse = response;
    console.log(namesResponse?.data.choices)
  } 
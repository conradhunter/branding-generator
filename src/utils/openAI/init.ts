import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';

const configuration = new Configuration({
  apiKey: process.env.DALL_E_API_KEY,
  organization: process.env.OPEN_AI_ORGANISATION,
});

export const openai = new OpenAIApi(configuration);

async function deductCredits() {
  const response = await fetch('/api/clerk/deduct-credits', {
    method: 'GET',
  });

  return response;
}

export let imageUrl: any;

export async function generateLogo(logoPrompt: string, resolution: string) {
  const response = await openai.createImage({
    prompt: logoPrompt,
    n: 1,
    size: '256x256' || resolution,
  });

  // if res succesful, deduct credits from users metadata
  if (response.status === 200) {
    imageUrl = response.data.data[0].url!;
    deductCredits();
    console.log('deduct credits');
  } else {
    console.log('error deducting credits');
    console.error(response);
    return null;
  }

  console.log(imageUrl);
  return imageUrl;
}

let namesResponse: any;

export async function generateBusinessName(prompt: string) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    n: 10,
    max_tokens: 10,
  });

  if (response.status === 200) {
    console.log('deduct credits');
    deductCredits();
    namesResponse = response;
  } else {
    console.log('error deducting credits');
    console.error(response);
  }

  console.log(namesResponse?.data.choices);
}

let sloganResponse: any;

export async function generateSlogan(prompt: string) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    n: 1,
    max_tokens: 10,
  });

  if (response.status === 200) {
    console.log('deduct credits');
    deductCredits();
    sloganResponse = response;
  } else {
    console.log('error deducting credits');
    console.error(response);
  }
}

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.DALL_E_API_KEY!,
  organization: 'org-pPpZQP6QHreKXJuAzPxRizq8'
});

export async function generateLogo() {
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    //prompt: 'High-end premium modern logo of the letters "CONRAD", featured on 99designs',
    prompt: 'a cartoon chicken with a pink tye on',
    n: 1,
    size: '256x256',
  });
  const imageUrl = response.data.data[0].url;
  console.log(imageUrl);
  return imageUrl;
}
// TODO: Figure out how to send bearer token in request header


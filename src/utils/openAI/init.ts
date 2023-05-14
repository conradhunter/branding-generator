import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY || process.env.DALL_E_API_KEY,
  organization:
    process.env.NEXT_OPEN_AI_ORGANISATION || process.env.OPEN_AI_ORGANISATION,
});

export const openai = new OpenAIApi(configuration);

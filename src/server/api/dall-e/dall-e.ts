import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.DALL_E_API_KEY,
    organization: "org-pPpZQP6QHreKXJuAzPxRizq8",
  });

  const mockAPI = process.env.MOCK_DALL_E
  
  export async function generateLogo() {

    if (mockAPI === 'true') {
        const url = 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-pPpZQP6QHreKXJuAzPxRizq8/user-QwhhSsdwGsbx1nFIyE83Hopl/img-FhXfjFnSXeuPeV4wu9CtdkYM.png?st=2023-04-29T09%3A41%3A21Z&se=2023-04-29T11%3A41%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-29T00%3A19%3A58Z&ske=2023-04-30T00%3A19%3A58Z&sks=b&skv=2021-08-06&sig=zJrbevQvaP6%2BNG8nsxfZWxSrFwgl3%2B8/o0xRMVXwg1w%3D'
        return url;
    } else {
        const openai = new OpenAIApi(configuration);

        const response = await openai.createImage({
            prompt: 'A graffiti style logo for OpenAI',
            n: 1,
            size: '256x256',
        })
        const imageUrl = response.data.data[0].url;
        console.log(imageUrl)
        return imageUrl;
    }
}





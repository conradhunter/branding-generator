'use client';

import React, { ChangeEvent, useState } from 'react';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import GenerateButton from '~/components/buttons/generate-buttons/GenerateLogoButton';
import Select from '../form-inputs/Select';
import { openai } from '~/utils/openAI/init';
import PreviewGeneratedBranding from '../PreviewGeneratedLogo';

export type LogoPromptData = {
  subject: string;
  style: string;
  resolution: string;
};

const LogoGeneratorForm = () => {
  const initialState: LogoPromptData = {
    subject: '',
    style: '',
    resolution: '',
  };

  const [logoPromptData, setLogoPromptData] =
    useState<LogoPromptData>(initialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    fieldName: keyof LogoPromptData
  ) => {
    setLogoPromptData({
      ...logoPromptData,
      [fieldName]: event.target.value,
    });
  };

  let logoPrompt = `square app logo/icon, ${logoPromptData.subject}, digital vector graphic, sharp, 4k, detailed, trending in artstation, 2 tone, graphic design style & ${logoPromptData.style}, on dark background`;
  let resolution = logoPromptData.resolution;

  const resetForm = (initialState: LogoPromptData) => {
    setLogoPromptData(initialState);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm(initialState);
  }

  let imageUrl: string;
  const [responseImageUrl, setResponseImageUrl] = useState<string>('');

  async function generateLogo(logoPrompt: string, resolution: string) {
    const response = await openai.createImage({
      prompt: logoPrompt,
      n: 1,
      size: '256x256' || resolution,
    });

    // if res succesful, deduct credits from users metadata
    if (response.status === 200) {
      imageUrl = response.data.data[0].url!;
      setResponseImageUrl(imageUrl);
      console.log('deduct credits');
    } else {
      console.log('error deducting credits');
      console.error(response);
      return null;
    }

    console.log(imageUrl);
    return imageUrl;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mb-20'
      >
        <div className='mb-6'>
          <Label content={'Description (adjectives, verbs, nouns)'} />
          <InputText
            value={logoPromptData.subject}
            onChange={(event) => handleInputChange(event, 'subject')}
            placeholder={'e.g sideview of horse'}
          />
        </div>
        <div className='mb-6'>
          <Label content={'Logo Style'} />
          <Select
            value={logoPromptData.style}
            onChange={(event) => handleInputChange(event, 'style')}
            options={['Modern', 'Minimal', 'Retro', 'Cartoon']}
          />
        </div>
        <div className='mb-6'>
          <Label content={'Logo Resolution'} />
          <Select
            value={logoPromptData.resolution}
            options={['256x256', '512x512', '1024x1024']}
            onChange={(event) => handleInputChange(event, 'resolution')}
          />
        </div>
        <div className='flex w-full items-center justify-center'>
          <GenerateButton
            logoPrompt={logoPrompt}
            resolution={resolution}
            generateLogo={generateLogo}
          />
        </div>
      </form>
      <PreviewGeneratedBranding responseImageUrl={responseImageUrl} />
    </>
  );
};

export default LogoGeneratorForm;

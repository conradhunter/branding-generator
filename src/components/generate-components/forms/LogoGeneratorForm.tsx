'use client';

import React, { ChangeEvent, useState } from 'react';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import GenerateButton from '~/components/buttons/generate-buttons/GenerateLogoButton';
import InputColor from '../form-inputs/InputColor';
import Select from '../form-inputs/Select';

export type LogoPromptData = {
  name: string;
  prompts: string;
  style: string;
  resolution: string;
  primaryColor: string;
  secondaryColor: string;
};

const LogoGeneratorForm = () => {
  const [logoPromptData, setLogoPromptData] = useState<LogoPromptData>({
    name: '',
    prompts: '',
    style: '',
    resolution: '',
    primaryColor: '',
    secondaryColor: '',
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    fieldName: keyof LogoPromptData
  ) => {
    setLogoPromptData({
      ...logoPromptData,
      [fieldName]: event.target.value,
    });
  };

  let logoPrompt = `${logoPromptData.name} logo concept inspired by ${logoPromptData.prompts} in a ${logoPromptData.prompts} style. Use ${logoPromptData.primaryColor} as the primary color and ${logoPromptData.secondaryColor} as the secondary color`;
  let resolution = logoPromptData.resolution;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <Label content={'Business/Company Name'} />
        <InputText
          value={logoPromptData.name}
          onChange={(event) => handleInputChange(event, 'name')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Descriptive Prompts (adjectives)'} />
        <InputText
          value={logoPromptData.prompts}
          onChange={(event) => handleInputChange(event, 'prompts')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Logo Style'} />
        <Select
          value={logoPromptData.style}
          onChange={(event) => handleInputChange(event, 'style')}
          options={[
            'Modern',
            'Minimal',
            'Vintage',
            'Retro',
            'Classic',
            'Elegant',
            'Cartoon',
            'Handwritten',
          ]}
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
      <div className='mb-6'>
        <Label content={'Primary Color'} />
        <InputColor
          value={logoPromptData.primaryColor}
          onChange={(event) => handleInputChange(event, 'primaryColor')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Secondary Color (optional)'} />
        <InputColor
          value={logoPromptData.secondaryColor}
          onChange={(event) => handleInputChange(event, 'secondaryColor')}
        />
      </div>
      <div className='flex w-full items-center justify-center'>
        <GenerateButton logoPrompt={logoPrompt} resolution={resolution} />
      </div>
    </form>
  );
};

export default LogoGeneratorForm;

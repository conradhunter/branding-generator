'use client';

import { useState } from 'react';
import GenerateButton from '../buttons/GenerateButton';
import NameInput from './generate-form-inputs/NameInput';
import PrimaryColor from './generate-form-inputs/PrimaryColor';
import PromptsInput from './generate-form-inputs/PromptsInput';
import SecondaryColor from './generate-form-inputs/SecondaryColor';
import StyleSelect from './generate-form-inputs/StyleSelect';
import ResolutionSelect from './generate-form-inputs/Resolution';

export type LogoPromptData = {
  name: string;
  prompts: string;
  style: string;
  resolution: string;
  primaryColor: string;
  secondaryColor: string;
};

export type InputProps = {
  updateProperty: (key: keyof LogoPromptData, value: string) => void;
};

const GeneratorForm = () => {
  const [logoPromptData, setLogoPromptData] = useState<LogoPromptData>({
    name: '',
    prompts: '',
    style: '',
    resolution: '',
    primaryColor: '',
    secondaryColor: '',
  });

  const updateProperty = (key: keyof LogoPromptData, value: string) => {
    setLogoPromptData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  let logoPrompt = `High-end premium ${logoPromptData.style} logo of the letters ${logoPromptData.name}, with a primary color of ${logoPromptData.primaryColor} & a secondary color of ${logoPromptData.secondaryColor}, featured on 99designs`;
  let resolution = logoPromptData.resolution;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(logoPromptData);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className=''>
        <div className='mb-6 grid gap-6 md:grid-cols-2'>
          <NameInput updateProperty={updateProperty} />
          <PromptsInput updateProperty={updateProperty} />
          <StyleSelect updateProperty={updateProperty} />
          <ResolutionSelect updateProperty={updateProperty} />
          <PrimaryColor updateProperty={updateProperty} />
          <SecondaryColor updateProperty={updateProperty} />
        </div>
        <div className='flex w-full items-center justify-center'>
          <GenerateButton logoPrompt={logoPrompt} resolution={resolution} />
        </div>
      </form>
    </>
  );
};

export default GeneratorForm;

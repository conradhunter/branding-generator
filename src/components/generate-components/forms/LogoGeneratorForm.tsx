'use client';

import React, { ChangeEvent, useState } from 'react';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import Select from '../form-inputs/Select';
import PreviewGeneratedBranding from '../PreviewGeneratedLogo';
import { generateLogo } from '~/utils/openAI/init';
import { SignInButton, useUser } from '@clerk/nextjs';

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

  const [logoImageUrl, setLogoImageUrl] = useState<string | null>(null);

  const handleGenerateLogo = async (prompt: string, resolution: string) => {
    const imageUrl = await generateLogo(prompt, resolution);
    setLogoImageUrl(imageUrl);
  };

  const user = useUser();

  const credits = user.user?.publicMetadata.credits || 0;

  const canGenerate =
    user.isSignedIn && typeof credits === 'number' && credits >= 5;

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
          {user.isSignedIn ? (
            <button
              className={`rounded-md bg-violet-400 px-6 py-2 text-lg uppercase text-white shadow-lg duration-150 ${
                canGenerate
                  ? 'hover:bg-violet-500'
                  : 'cursor-not-allowed opacity-50'
              }`}
              disabled={!canGenerate}
              onClick={() => handleGenerateLogo(logoPrompt, resolution)}
            >
              Generate
            </button>
          ) : (
            <SignInButton>
              <button className='rounded-md bg-violet-400 px-6 py-2 text-lg uppercase text-white shadow-lg duration-150 hover:bg-violet-500'>
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </form>
      <PreviewGeneratedBranding logoImageUrl={logoImageUrl} />
    </>
  );
};

export default LogoGeneratorForm;

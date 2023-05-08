'use client';

import React, { ChangeEvent, useState } from 'react';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import GenerateSloganButton from '~/components/buttons/generate-buttons/GenerateSloganButton';
import InputRange from '../form-inputs/InputRange';

export type LogoPromptData = {
  productOrService: string;
  keyWord: string;
  temperature: number;
};

const SloganGeneratorForm = () => {
  const initialState: LogoPromptData = {
    productOrService: '',
    keyWord: '',
    temperature: 1,
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

  let sloganPrompt: string = `Generate a slogan for ${logoPromptData.productOrService} company using the keywords ${logoPromptData.keyWord}`;
  let temperature = logoPromptData.temperature;

  const resetForm = (initialState: LogoPromptData) => {
    setLogoPromptData(initialState);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm(initialState);
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <Label content={'Product or Service'} />
        <InputText
          value={logoPromptData.productOrService}
          onChange={(event) => handleInputChange(event, 'productOrService')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Keyword'} />
        <InputText
          value={logoPromptData.keyWord}
          onChange={(event) => handleInputChange(event, 'keyWord')}
        />
      </div>
      <div className='mb-6'>
        <Label content={`Focus (Low = focused, High = creative)`} />
        <InputRange
          min={0}
          max={2}
          defaultValue={1}
          onChange={(event) => handleInputChange(event, 'temperature')}
        />
      </div>
      <div className='flex w-full items-center justify-center'>
        <GenerateSloganButton
          sloganPrompt={sloganPrompt}
          temperature={temperature}
        />
      </div>
    </form>
  );
};

export default SloganGeneratorForm;

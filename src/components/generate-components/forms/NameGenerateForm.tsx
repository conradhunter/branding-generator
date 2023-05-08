'use client';

import React, { ChangeEvent, useState } from 'react';
import GenerateNameButton from '../../buttons/generate-buttons/GenerateNameButton';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import InputRange from '../form-inputs/InputRange';

type NamePromptData = {
  industry: string;
  productOrService: string;
  keyWords: string;
  temperature: number;
};

const NameGenerateForm = () => {
  const initialState: NamePromptData = {
    industry: '',
    productOrService: '',
    keyWords: '',
    temperature: 1,
  };

  const [nameFormValues, setNameFormValues] =
    useState<NamePromptData>(initialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: keyof NamePromptData
  ) => {
    setNameFormValues({
      ...nameFormValues,
      [fieldName]: event.target.value,
    });
  };

  const resetForm = (initialState: NamePromptData) => {
    setNameFormValues(initialState);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm(initialState);
  }

  let finalNamePrompt: string = `Generate a business name for a business from the ${nameFormValues.industry} industry which sells ${nameFormValues.productOrService}. Some keywords about the business include ${nameFormValues.keyWords}`;
  let temperature: number = nameFormValues.temperature;

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <Label content={'Industry'} />
        <InputText
          value={nameFormValues.industry}
          onChange={(event) => handleInputChange(event, 'industry')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Product or Service'} />
        <InputText
          value={nameFormValues.productOrService}
          onChange={(event) => handleInputChange(event, 'productOrService')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Keywords'} />
        <InputText
          value={nameFormValues.keyWords}
          onChange={(event) => handleInputChange(event, 'keyWords')}
        />
      </div>
      <div className='mb-6'>
        <Label content={'Focus (Low = focused, High = creative)'} />
        <InputRange
          min={0}
          max={2}
          defaultValue={1}
          onChange={(event) => handleInputChange(event, 'temperature')}
        />
      </div>
      <div className='flex w-full items-center justify-center'>
        <GenerateNameButton
          finalNamePrompt={finalNamePrompt}
          temperature={temperature}
        />
      </div>
    </form>
  );
};

export default NameGenerateForm;

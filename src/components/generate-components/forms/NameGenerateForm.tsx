'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import GenerateNameButton from '../../buttons/generate-buttons/GenerateNameButton';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import PreviewGeneratedText from '../PreviewGeneratedText';
import { generateBusinessName, namesResponse } from '~/utils/openAI/init';

type NamePromptData = {
  industry: string;
  keyWords: string;
  temperature: number;
};

const NameGenerateForm = () => {
  const initialState: NamePromptData = {
    industry: '',
    keyWords: '',
    temperature: 1,
  };

  const [nameFormValues, setNameFormValues] =
    useState<NamePromptData>(initialState);
  const [generatedName, setGeneratedName] = useState<any>();

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

  let finalNamePrompt: string = `Generate a business name for a business from the ${nameFormValues.industry} industry. make use of some of these keywords "${nameFormValues.keyWords}"`;
  const generateNames = async (prompt: string) => {
    await generateBusinessName(prompt);
    setGeneratedName(namesResponse?.data.choices || []);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm(initialState);
  }

  return (
    <>
      <form
        action=''
        onSubmit={handleSubmit}
        className='mb-20'
      >
        <div className='mb-6'>
          <Label content={'Industry'} />
          <InputText
            value={nameFormValues.industry}
            placeholder='e.g tourism'
            onChange={(event) => handleInputChange(event, 'industry')}
          />
        </div>
        <div className='mb-6'>
          <Label content={'Keywords'} />
          <InputText
            value={nameFormValues.keyWords}
            placeholder='e.g tropical, beach'
            onChange={(event) => handleInputChange(event, 'keyWords')}
          />
        </div>
        <div className='flex w-full items-center justify-center'>
          <GenerateNameButton
            generateNames={generateNames}
            finalNamePrompt={finalNamePrompt}
          />
        </div>
      </form>
      <PreviewGeneratedText
        name={'name'}
        generatedText={generatedName}
      />
    </>
  );
};

export default NameGenerateForm;

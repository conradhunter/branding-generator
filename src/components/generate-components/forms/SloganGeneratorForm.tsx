'use client';

import React, { ChangeEvent, useState } from 'react';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import GenerateSloganButton from '~/components/buttons/generate-buttons/GenerateSloganButton';
import PreviewGeneratedText from '../PreviewGeneratedText';
import { generateSlogan, sloganResponse } from '~/utils/openAI/init';

export type LogoPromptData = {
  productOrService: string;
  keyWord: string;
};

const SloganGeneratorForm = () => {
  const initialState: LogoPromptData = {
    productOrService: '',
    keyWord: '',
  };

  const [logoPromptData, setLogoPromptData] =
    useState<LogoPromptData>(initialState);
  const [generatedSlogan, setGeneratedSlogan] = useState<any>();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    fieldName: keyof LogoPromptData
  ) => {
    setLogoPromptData({
      ...logoPromptData,
      [fieldName]: event.target.value,
    });
  };

  const resetForm = (initialState: LogoPromptData) => {
    setLogoPromptData(initialState);
  };

  let sloganPrompt: string = `Generate a slogan for ${logoPromptData.productOrService} company using the keywords ${logoPromptData.keyWord}`;

  const generateSloganHandler = async (prompt: string) => {
    await generateSlogan(prompt);
    setGeneratedSlogan(sloganResponse?.data.choices || []);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm(initialState);
  }

  return (
    <>
      <form
        className='mb-20'
        action=''
        onSubmit={handleSubmit}
      >
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
        <div className='flex w-full items-center justify-center'>
          <GenerateSloganButton
            generateSloganHandler={generateSloganHandler}
            sloganPrompt={sloganPrompt}
          />
        </div>
      </form>
      <PreviewGeneratedText
        name={'slogan'}
        generatedText={generatedSlogan}
      />
    </>
  );
};

export default SloganGeneratorForm;

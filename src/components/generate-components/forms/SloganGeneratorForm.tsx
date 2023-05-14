'use client';

import React, { ChangeEvent, useState } from 'react';
import Label from '../form-inputs/Label';
import InputText from '../form-inputs/InputText';
import GenerateSloganButton from '~/components/buttons/generate-buttons/GenerateSloganButton';
import InputRange from '../form-inputs/InputRange';
import { openai } from '~/utils/openAI/init';
import PreviewGeneratedText from '../PreviewGeneratedText';

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

  const resetForm = (initialState: LogoPromptData) => {
    setLogoPromptData(initialState);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm(initialState);
  }

  let sloganResponse: any;

  const [generatedSlogan, setGeneratedSlogan] = useState<string[]>([]);

  async function generateSlogan(prompt: string, temperature: number) {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      n: 1,
      max_tokens: 10,
      temperature: temperature,
    });

    if (response.status === 200) {
      console.log('deduct credits');
      sloganResponse = response;
      setGeneratedSlogan(sloganResponse?.data.choices);
    } else {
      console.log('error deducting credits');
      console.error(response);
    }
  }

  let sloganPrompt: string = `Generate a slogan for ${logoPromptData.productOrService} company using the keywords ${logoPromptData.keyWord}`;
  let temperature = logoPromptData.temperature;

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
            generateSlogan={generateSlogan}
          />
        </div>
      </form>
      <PreviewGeneratedText
        name={'slogan'}
        generated={generatedSlogan}
      />
    </>
  );
};

export default SloganGeneratorForm;

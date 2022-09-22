import React from 'react';
import { StyledLabel, Flex, Input } from './Label.style';
import { useState } from 'react';

export const Label = () => {
  const [inputValue, setInputValue] = useState('toto');

  function handleChange(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  return (
    <Flex>
      <StyledLabel></StyledLabel>
      <Input type="text" id="firstName" value={inputValue} onChange={handleChange} />
    </Flex>
  );
};

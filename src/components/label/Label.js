import { StyledLabel, Flex, Input } from './Label.style';
import { useState } from 'react';

export const Label = () => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Flex>
      <StyledLabel></StyledLabel>
      <Input type="text" id="firstName" value={inputValue} onChange={handleChange} />
    </Flex>
  );
};

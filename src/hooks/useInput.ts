import { ChangeEvent, useState } from 'react';

type TypeValidate = 'keyword';
// eslint-disable-next-line
const useInput = (initialValue: any, validate?: TypeValidate) => {
  const [value, setter] = useState(initialValue);
  const validation = true;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.target.value;
    setter(newValue);
  };

  return [value, onChange, validation, setter];
};

export default useInput;

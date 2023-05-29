import { ChangeEvent, useMemo, useState } from 'react';
import validate, { TypeValidate } from '@utils/validate';

// eslint-disable-next-line
const useInput = (initialValue: any, validateType?: TypeValidate) => {
  const [value, setter] = useState(initialValue);
  // const validation = useMemo(() => validate(value, validateType), [value, validateType]);
  const validation = validate(value, validateType);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.target.value;
    setter(newValue);
  };

  return [value, onChange, validation, setter];
};

export default useInput;

import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = styled.input<Props>`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 15px 20px;
  font-size: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.invalid === true ? props.theme.colors.red : 'rgba(0, 0, 0, 0.05)'};
`;

export default Input;

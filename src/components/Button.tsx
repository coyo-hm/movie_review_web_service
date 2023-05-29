import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTheme: keyof typeof theme.button;
}

const Button = styled.button<Props>`
  border-radius: 50px;
  padding: 10px;
  font-size: 16px;
  transition: 0.3ms;
  width: 100%;

  ${(props) => props.theme.button[props.buttonTheme].default}

  &:hover {
    ${(props) => props.theme.button[props.buttonTheme].hover}
    transform: translateY(-2px);
  }

  &:disabled {
    ${(props) => props.theme.button[props.buttonTheme].disabled}
  }
`;

export default Button;

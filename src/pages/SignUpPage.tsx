import styled from '@emotion/styled';
import Logo from '../assets/images/logo_icon.png';
import Input from '../components/Input';
import useInput from '../hooks/useInput';
import { useState } from 'react';

const SignUpPageWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: calc(${(props) => props.theme.layout.headerHeight} + 60px);
`;

const SignUpTitle = styled.h1`
  font-weight: 900;
  font-size: 36px;
  border-bottom: 5px solid ${(props) => props.theme.colors.logoBlue};
  padding: 20px 0 5px;
  margin-bottom: 20px;
`;

const SignUpForm = styled.form`
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 #0000001a;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 560px;
`;

const SignUpPage = () => {
  const [email, onChangeEmail] = useInput('', 'email');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignUpPageWrapper>
      <img src={Logo} width={60} />
      <SignUpTitle>회원가입</SignUpTitle>
      <SignUpForm>
        <Input value={email} onChange={onChangeEmail} placeholder={'이메일'} />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={'비밀번호'}
          type={showPassword ? 'text' : 'password'}
        />
        <Input
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          placeholder={'비밀번호'}
          type={showPassword ? 'text' : 'password'}
        />
      </SignUpForm>
    </SignUpPageWrapper>
  );
};

export default SignUpPage;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import useInput from '../hooks/useInput';
import SITE_URL from '../constants/site_url';
import Input from './Input';
import Button from './Button';
import { ReactComponent as IconWarning } from '../assets/images/warning.svg';

const LoginForm = styled.form`
  padding: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

const LoginButtonArea = styled.footer`
  margin: 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const WarnMessage = styled.div`
  padding-left: 5px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
  display: grid;
  grid-template-columns: 17px 1fr;
  align-items: center;
  line-height: 15px;

  svg {
    height: 13px;
    width: auto;
  }
`;

const LoginModal = () => {
  const [email, onChangeEmail, isEmailValid] = useInput('', 'email');
  const [password, onChangePassword] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = () => {
    console.log(email);
  };

  return (
    <LoginForm onSubmit={login}>
      <Input
        value={email}
        onChange={onChangeEmail}
        placeholder={'이메일'}
        invalid={!isEmailValid}
      />
      {!isEmailValid && (
        <WarnMessage>
          <IconWarning />
          이메일 형식으로 입력해주세요.
        </WarnMessage>
      )}
      <Input value={password} onChange={onChangePassword} placeholder={'비밀번호'} />
      {errorMessage && (
        <WarnMessage>
          <IconWarning />
          이메일 형식으로 입력해주세요.
        </WarnMessage>
      )}
      <LoginButtonArea>
        <Button buttonTheme={'white'} onClick={login}>
          로그인
        </Button>
        <Link to={SITE_URL.SIGN_UP}>
          <Button buttonTheme={'main'}>회원가입</Button>
        </Link>
      </LoginButtonArea>
    </LoginForm>
  );
};

export default LoginModal;

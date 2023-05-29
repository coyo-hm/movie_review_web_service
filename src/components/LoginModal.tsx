import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import useInput from '../hooks/useInput';
import SITE_URL from '../constants/site_url';
import Input from './Input';
import Button from './Button';

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

const LoginModal = () => {
  const [email, onChangeEmail, isEmailValid] = useInput('', 'email');
  const [password, onChangePassword] = useInput('');

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
      <Input value={password} onChange={onChangePassword} placeholder={'비밀번호'} />
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

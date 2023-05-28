import styled from '@emotion/styled';
import useInput from '../hooks/useInput';

const LoginForm = styled.form`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

const LoginInput = styled.input`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 15px 20px;
  font-size: 16px;
`;

const LoginModal = () => {
  const [email, onChangeEmail, emailValidation] = useInput('', 'email');
  const [password, onChangePassword] = useInput('');
  const login = () => {
    console.log(email);
  };

  console.log(emailValidation);

  return (
    <LoginForm onSubmit={login}>
      <LoginInput value={email} onChange={onChangeEmail} placeholder={'이메일'} />
      <LoginInput value={password} onChange={onChangePassword} placeholder={'비밀번호'} />
    </LoginForm>
  );
};

export default LoginModal;

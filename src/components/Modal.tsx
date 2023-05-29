import { ReactNode, useEffect } from 'react';
import styled from '@emotion/styled';
import Dim from './Dim';
import Logo from '../assets/images/logo_icon.png';
import IconX from '../assets/images/x.svg';

const ModalWrapper = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  padding: 20px;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ModalTitle = styled.h1`
  border-bottom: 2px solid ${(props) => props.theme.colors.logoBlue};
  font-weight: 700;
  font-size: 20px;
  padding: 10px 5px 5px;
  margin-bottom: 20px;
`;

export interface ModalProps {
  title: string;
  content: ReactNode;
  close: () => void;
}

const Modal = ({ title, content, close }: ModalProps) => {
  const blockScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  useEffect(() => {
    window.addEventListener('wheel', blockScroll);
    return () => window.removeEventListener('wheel', blockScroll);
  }, []);

  return (
    <>
      <Dim />
      <ModalWrapper>
        <header>
          <img src={Logo} width={60} />
          <ModalCloseBtn onClick={close}>
            <img src={IconX} width={10} />
          </ModalCloseBtn>
        </header>
        <ModalTitle>{title}</ModalTitle>
        {content}
      </ModalWrapper>
    </>
  );
};

export default Modal;

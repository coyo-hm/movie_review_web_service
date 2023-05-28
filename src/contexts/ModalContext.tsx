import { createContext, ReactNode, useState } from 'react';
import { ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace';
import Modal, { ModalProps } from '../components/Modal';

interface ModalContextProps {
  openModal: (title: string, content: ReactNode, close?: () => void) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<ModalProps | null>(null);

  const closeModal = () => setModal(null);
  const openModal = (title: string, content: ReactNode, close = closeModal) => {
    setModal({ title, content, close });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {!!modal && <Modal {...modal} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

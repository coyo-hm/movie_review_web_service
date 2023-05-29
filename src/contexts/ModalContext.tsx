import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal, { ModalProps } from '@components/Modal';

interface ModalContextProps {
  openModal: (title: string, content: ReactNode, close?: () => void) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const location = useLocation();
  const [modal, setModal] = useState<ModalProps | null>(null);
  const prevLocation = useRef<string | null>(null);

  const closeModal = () => setModal(null);
  const openModal = (title: string, content: ReactNode, close = closeModal) => {
    setModal({ title, content, close });
  };

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      prevLocation.current = location.pathname;
      closeModal();
    }
  }, [location.pathname]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {!!modal && <Modal {...modal} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

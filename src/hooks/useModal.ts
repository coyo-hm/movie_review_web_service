import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const useModal = () => {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error('NO MODAL');
  }
  return modal;
};

export default useModal;

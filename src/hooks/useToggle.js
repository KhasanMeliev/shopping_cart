import { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, open, close, toggle };
};

export default useToggle;

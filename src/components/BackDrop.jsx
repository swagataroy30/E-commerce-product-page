import React from 'react';
import { createPortal } from 'react-dom';

const BackDrop = ({ setIsNavOpen, setIsLightBoxOpen }) => {
  return (
    <>
      {createPortal(
        <div
          className='backdrop'
          onClick={() => (setIsNavOpen ? setIsNavOpen(false) : setIsLightBoxOpen(false))}
        ></div>,
        document.getElementById('backdrop--root')
      )}
    </>
  );
};

export default BackDrop;

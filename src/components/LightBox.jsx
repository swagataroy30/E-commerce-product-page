import React from 'react';
import BackDrop from './BackDrop';
import ProductImage from './ProductImage';
import { createPortal } from 'react-dom';

const LightBox = ({ setIsLightBoxOpen }) => {
  return (
    <>
      {createPortal(<BackDrop setIsLightBoxOpen={setIsLightBoxOpen} />, document.getElementById('backdrop--root'))}
      {createPortal(<ProductImage isLightBox={true} />, document.getElementById('lightbox--root'))}
    </>
  );
};

export default LightBox;

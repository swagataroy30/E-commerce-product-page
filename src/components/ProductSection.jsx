import React, { useContext } from 'react';
import AppContext from '../store/app-context';
import LightBox from './LightBox';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';

const ProductSection = () => {
  const { isLightBoxOpen, setIsLightBoxOpen } = useContext(AppContext);

  return (
    <main className='product-container'>
      <ProductImage />
      <ProductDetails />
      {isLightBoxOpen && <LightBox setIsLightBoxOpen={setIsLightBoxOpen} />}
    </main>
  );
};

export default ProductSection;

import React, { useContext, useState } from 'react';
import img1_thumb from '../images/image-product-1-thumbnail.jpg';
import img2_thumb from '../images/image-product-2-thumbnail.jpg';
import img3_thumb from '../images/image-product-3-thumbnail.jpg';
import img4_thumb from '../images/image-product-4-thumbnail.jpg';
import img1_large from '../images/image-product-1.jpg';
import img2_large from '../images/image-product-2.jpg';
import img3_large from '../images/image-product-3.jpg';
import img4_large from '../images/image-product-4.jpg';
import { ReactComponent as Close } from '../images/icon-close.svg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';
import AppContext from '../store/app-context';

const imgArr = [img1_large, img2_large, img3_large, img4_large];

const ProductImage = ({ isLightBox }) => {
  const [currentLargeImgNo, setCurrentLargeImgNo] = useState(1);

  const { isCartOpen, setIsLightBoxOpen } = useContext(AppContext);

  const previousHandler = () => {
    if (currentLargeImgNo > 1) setCurrentLargeImgNo((prevState) => prevState - 1);
    else setCurrentLargeImgNo(4);
  };

  const nextHandler = () => {
    setCurrentLargeImgNo((prevState) => (prevState % 4) + 1);
  };

  const getImage = (imgNo) => {
    return imgArr[imgNo - 1];
  };

  return (
    <section className={`product-image-container ${isLightBox ? 'light-box' : ''}`}>
      {!isCartOpen && (
        <img
          src={prev}
          alt='previous_icon'
          className={`control_img_large_icon ${isLightBox ? 'lightbox-icon' : ''} prev_icon`}
          onClick={previousHandler}
        />
      )}
      {!isCartOpen && (
        <img
          src={next}
          alt='next_icon'
          className={`control_img_large_icon ${isLightBox ? 'lightbox-icon' : ''} next_icon`}
          onClick={nextHandler}
        />
      )}
      {isLightBox && <Close className='close_lightbox_icon' onClick={() => setIsLightBoxOpen(false)} />}
      <img
        src={getImage(currentLargeImgNo)}
        alt='product-img'
        className='img_large'
        onClick={() => setIsLightBoxOpen(true)}
      />
      <div className='thumbnail-container'>
        <div className={currentLargeImgNo == 1 ? 'selected' : ''} onClick={() => setCurrentLargeImgNo(1)}>
          <img src={img1_thumb} alt='image-product-1-thumbnail.jpg' />
        </div>

        <div className={currentLargeImgNo == 2 ? 'selected' : ''} onClick={() => setCurrentLargeImgNo(2)}>
          <img src={img2_thumb} alt='image-product-2-thumbnail.jpg' />
        </div>

        <div className={currentLargeImgNo == 3 ? 'selected' : ''} onClick={() => setCurrentLargeImgNo(3)}>
          <img src={img3_thumb} alt='image-product-3-thumbnail.jpg' />
        </div>

        <div className={currentLargeImgNo == 4 ? 'selected' : ''} onClick={() => setCurrentLargeImgNo(4)}>
          <img src={img4_thumb} alt='image-product-4-thumbnail.jpg' />
        </div>
      </div>
    </section>
  );
};

export default ProductImage;

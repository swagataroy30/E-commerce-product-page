import React, { useContext, useState } from 'react';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg';
import AppContext from '../store/app-context';

const ProductDetails = () => {
  const [inputQty, setInputQty] = useState(0);
  const { setCartItemCounter } = useContext(AppContext);

  const reduceHandler = () => {
    if (inputQty > 0) {
      setInputQty((prevQty) => prevQty - 1);
    }
  };

  const increaseHandler = () => {
    setInputQty((prevQty) => prevQty + 1);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setCartItemCounter((prevCounter) => prevCounter + parseInt(inputQty, 10));

    setInputQty(0);
  };

  return (
    <article className='product-details-container'>
      <p className='brand-name'>Sneaker Company</p>
      <h1 className='product-title'>Fall Limited Edition Sneakers</h1>
      <p className='product-bio'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they'll withstand everything the weather can offer.
      </p>
      <div className='price-discount-container'>
        <div>
          <h2>$125.00</h2>
          <span>50%</span>
        </div>
        <p className='previous-price'>$250.00</p>
      </div>

      <div className='product-quantity-control'>
        <div>
          <button onClick={reduceHandler}>
            <img src={minus} alt='minus-products' />
          </button>
          <input value={inputQty} type='text' onChange={(e) => setInputQty(e.target.value)} />
          <button onClick={increaseHandler}>
            <img src={plus} alt='add-products' />
          </button>
        </div>

        <button className='add-to-cart-btn' onClick={submitHandler}>
          <img src={cart} alt='' />
          <p>Add to Cart</p>
        </button>
      </div>
    </article>
  );
};

export default ProductDetails;

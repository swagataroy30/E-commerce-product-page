import React, { useContext } from 'react';
import product_img from '../images/image-product-1-thumbnail.jpg';
import del_icon from '../images/icon-delete.svg';
import AppContext from '../store/app-context';

const Cart = () => {
  const { cartItemCounter, setCartItemCounter } = useContext(AppContext);

  return (
    <div className='cart-container'>
      <p className='cart-text'>Cart</p>
      {cartItemCounter > 0 && (
        <>
          <div className='cart-items'>
            <div className='cart-item'>
              <img src={product_img} alt='product_imgae' className='cart-item_img' />
              <div className='cart-item-details'>
                <p className='cart-item-title'>Fall Limited Edition Sneakers</p>
                <p className='cart-item-price-count'>
                  $125.00 x {cartItemCounter} <span className='total-price'>${(125 * cartItemCounter).toFixed(2)}</span>
                </p>
              </div>
              <img src={del_icon} alt='delete_icon.svg' className='delete_icon' onClick={() => setCartItemCounter(0)} />
            </div>
          </div>
          <button className='checkout-btn'>Checkout</button>
        </>
      )}
      {!cartItemCounter && (
        <div className='cart-empty-container'>
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

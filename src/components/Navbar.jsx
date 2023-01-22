import React, { useContext, useState } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import close from '../images/icon-close.svg';
import Cart from './Cart';
import AppContext from '../store/app-context';
import BackDrop from './BackDrop';

const Navbar = () => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const { cartItemCounter, isCartOpen, setIsCartOpen } = useContext(AppContext);

  return (
    <header>
      <div className='logo-menu-container'>
        <img src={menu} alt='menu-icon' className='menu_icon' onClick={() => setIsMobNavOpen(true)} />
        <img src={logo} alt='sneaker-logo' className='logo_img' />
      </div>

      <nav className={`${isMobNavOpen ? 'open' : 'close'}`}>
        <img src={close} alt='close-icon' className='close_icon' onClick={() => setIsMobNavOpen(false)} />
        {isMobNavOpen && <BackDrop setIsNavOpen={setIsMobNavOpen} />}
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='user-section'>
        <button className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={cart} alt='icon-cart.svg' className='cart_icon' />
          {cartItemCounter > 0 && <span className='cart-items-counter'>{cartItemCounter}</span>}
        </button>

        <img src={avatar} alt='avatar-img' className='avatar_img' />
        {isCartOpen && <Cart />}
      </div>
    </header>
  );
};

export default Navbar;

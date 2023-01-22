import { createContext, useState } from 'react';

const AppContext = createContext({
  cartItemCounter: 0,
  setItemCartCounter: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  isLightBoxOpen: false,
  setIsLightBoxOpen: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [cartItemCounter, setCartItemCounter] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ cartItemCounter, setCartItemCounter, isCartOpen, setIsCartOpen, isLightBoxOpen, setIsLightBoxOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

import React, { createContext, useState, useEffect } from 'react';
import Products from '../Products';

export const Context = createContext(null);

const getInitialCart = () => {
  const storedCart = localStorage.getItem('cartItem');
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  const cart = {};
  Products.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const ContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  const addTocart = (itemId) => {
    setCartItem(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeTocart = (itemId) => {
    setCartItem(prev => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const ContextValue = {
    Products,
    cartItem,
    addTocart,
    removeTocart,
  };

  return (
    <Context.Provider value={ContextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

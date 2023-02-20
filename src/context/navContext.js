import React, { createContext, useState, useRef } from 'react';

export const NavigationContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const navRef = useRef('ggwp');

  function handleScroll(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider
      value={{ count, setCount, handleClick, navRef, handleScroll }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

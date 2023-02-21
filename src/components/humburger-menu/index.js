import React, { useState } from 'react';
import Nav from '../nav';

const HumburgerMenu = () => {
  const [isToggle, setIsToggle] = useState(false);
  const spanStyle =
    'block w-[33px] h-[4px] mb-[5px] relative bg-secondary rounded-sm z-10';
  return (
    <>
      <div className="hidden bg-primary w-full  z-[100] shadow-2xl">
        <div className="flex bg-primary justify-end items-center sm:hidden w-full h-26 min-h-16 z-50 ">
          <button
            className="hamburger active p-8"
            onClick={() => setIsToggle(!isToggle)}
          >
            <span className={spanStyle}></span>
            <span className={spanStyle}></span>
            <span className={spanStyle}></span>
          </button>
        </div>
      </div>
      <Nav isOpen={isToggle} />
    </>
  );
};

export default HumburgerMenu;

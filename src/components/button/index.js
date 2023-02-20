import React from 'react';

const CustomButton = ({ children, size }) => {
  return (
    <button className="bg-secondary rounded-md text-4xl min-w-[120px]">
      <span className="p-10">{children}</span>
    </button>
  );
};

export default CustomButton;

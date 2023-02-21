import React from 'react';
import './styles.scss';
import { AiOutlineDownload } from 'react-icons/ai';

const CustomButton = ({ children, size, icon, type, dl }) => {
  return (
    <a
      href={dl}
      download
      type={type}
      className="btn flex items-center justify-center gap-6 bg-gradient-to-r from-[#5b5a78] to-secondary rounded-full text-3xl md:text-4xl min-w-[130px] md:min-w-[160px] h-16 md:h-20 drop-shadow-2xl"
    >
      {icon && <span className="">{icon}</span>}
      <h4 className="py-10">{children}</h4>
    </a>
  );
};

export default CustomButton;

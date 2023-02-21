import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { NavigationContext } from '../../context/navContext';

const Nav = ({ isOpen }) => {
  const { handleScroll } = useContext(NavigationContext);
  const [open, setOpen] = useState(isOpen);
  return (
    <div
      className={` h-full w-screen z-50 bg-secondary flex-col items-center justify-start text-6xl ${
        open ? 'fixed' : 'hidden'
      }`}
    >
      <ul className="pt-[150px] flex flex-col items-center justify-start gap-28">
        <li
          onClick={() => {
            handleScroll('home');
            setOpen(false);
          }}
          className="flex items-center justify-center bg-primary py-8 px-16 mb-5 rounded-2xl min-w-[150px]"
        >
          HOME
        </li>
        <li
          onClick={() => handleScroll('skills')}
          className="flex items-center justify-center bg-primary py-8 px-16 mb-5 rounded-2xl min-w-[150px]"
        >
          SKILLS
        </li>
        <li
          onClick={() => handleScroll('about-me')}
          className="flex items-center justify-center bg-primary py-8 px-16 mb-5 rounded-2xl min-w-[150px]"
        >
          ABOUT ME
        </li>
        <li
          onClick={() => handleScroll('projects')}
          className="flex items-center justify-center bg-primary py-8 px-16 mb-5 rounded-2xl min-w-[150px]"
        >
          PROJECTS
        </li>
      </ul>
    </div>
  );
};

export default Nav;

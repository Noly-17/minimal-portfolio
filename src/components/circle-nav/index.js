import React, { useRef, useContext } from 'react';
import { NavigationContext } from '../../context/navContext';
import './styles.scss';
import { Link, Outlet } from 'react-router-dom';
import { AiFillCiCircle } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';

import Tooltip from '../tool-tip';

const CircleNav = () => {
  const { handleScroll } = useContext(NavigationContext);
  return (
    <>
      <div className="nav h-[250px] w-[250px] md:block hidden drop-shadow-3xl bg-secondary z-50 rounded-full fixed top-[-40px] left-[-50px]">
        <div className="w-[248px] h-[248px] bg-primary rounded-full z-[3] relative">
          <Link
            onClick={() => handleScroll('home')}
            to={'/'}
            className="absolute top-[50] right-[-20] bg-secondary rounded-full"
          >
            <Tooltip content="skills">
              <AiFillCiCircle className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem]" />
            </Tooltip>{' '}
          </Link>
          <Link
            onClick={() => handleScroll('services')}
            to={'/skills'}
            className="absolute top-[140] right-[-20] bg-secondary rounded-full cursor-pointer"
          >
            <Tooltip content="skills">
              <FaRegUser className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem] p-5" />
            </Tooltip>{' '}
          </Link>
          <Link
            onClick={() => handleScroll('about-me')}
            className="absolute bottom-[-20] right-[40] bg-secondary rounded-full cursor-pointer"
          >
            <Tooltip content="skills">
              <AiFillCiCircle className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem]" />
            </Tooltip>{' '}
          </Link>
          <Link
            className="absolute bottom-[-20] left-[60] bg-secondary rounded-full cursor-pointer"
            data-tip="sample data"
          >
            <Tooltip content="skills">
              <AiFillCiCircle className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem]" />
            </Tooltip>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CircleNav;

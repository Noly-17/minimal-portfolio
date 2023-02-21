import React, { useRef, useContext } from 'react';
import { NavigationContext } from '../../context/navContext';
import './styles.scss';
import { Link, Outlet } from 'react-router-dom';
import { AiFillCiCircle, AiOutlineHome } from 'react-icons/ai';
import { GiMagicPalm } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { TbBorderAll } from 'react-icons/tb';

import Tooltip from '../tool-tip';

const CircleNav = () => {
  const { handleScroll } = useContext(NavigationContext);
  return (
    <>
      <div className="h-[252px] w-[252px] md:block hidden drop-shadow-3xl bg-white z-50 rounded-full fixed top-[-40px] left-[-50px]">
        <div className="w-[248px] h-[248px] bg-primary rounded-full z-[3] relative flex items-center justify-center">
          <h3 className="text-7xl font-bold ">
            N<span className="c-letter">.C</span>
          </h3>
          <Link
            onClick={() => handleScroll('home')}
            to={'/'}
            className="absolute top-[45] right-[-26] bg-secondary rounded-full border-4 border-white cursor-pointer"
          >
            <Tooltip content="Home">
              <AiOutlineHome className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem] p-5 hover:z-30" />
            </Tooltip>{' '}
          </Link>
          <Link
            onClick={() => handleScroll('services')}
            to={'/skills'}
            className="absolute top-[128] right-[-28] bg-secondary rounded-full border-4 border-white cursor-pointer"
          >
            <Tooltip content="Skills">
              <GiMagicPalm className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem] p-5 hover:z-30" />
            </Tooltip>{' '}
          </Link>
          <Link
            onClick={() => handleScroll('about-me')}
            to={'/about-me'}
            className="absolute bottom-[-18] right-[25] bg-secondary rounded-full border-4 border-white cursor-pointer"
          >
            <Tooltip content="About Me">
              <BsFillFileEarmarkPersonFill className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem] p-5 hover:z-30" />
            </Tooltip>{' '}
          </Link>
          <Link
            onClick={() => handleScroll('projects')}
            className="absolute bottom-[-35] left-[57] bg-secondary rounded-full border-4 border-white cursor-pointer"
          >
            <Tooltip content="Projects">
              <TbBorderAll className="w-[6rem] h-[6rem] hover:h-[7rem] hover:w-[7rem] p-5 text-white hover:z-30" />
            </Tooltip>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CircleNav;

import React, { forwardRef, useContext, useEffect } from 'react';
import { NavigationContext } from '../../context/navContext';
import { images } from '../../assets';
import { Link } from 'react-router-dom';
import CustomButton from '../button';
import CircleNav from '../circle-nav';
import HumburgerMenu from '../humburger-menu';
import RightNav from '../right-nav';
import { AiOutlineDownload } from 'react-icons/ai';
import { pdfs } from '../../assets';

const TopNav = () => {
  return (
    <div>
      <CircleNav />
      <HumburgerMenu />
      <RightNav />
    </div>
  );
};

const HeroPage = () => {
  const { handleScroll } = useContext(NavigationContext);

  return (
    <>
      <TopNav />
      <div
        id="home"
        className="h-screen flex   flex-col sm:flex-row  items-center bg-gradient-to-r from-[#dfb17a] to-primary justify-end md:justify-center max-w-full"
      >
        <div
          className=" flex flex-col items-center justify-center gap-10 text-center drop-shadow-3xl text-white sm:w-[360px] w-full"
          data-aos="fade-right"
        >
          <h4 className="text-6xl md:text-7xl font-bold">Hi, I'm Noly,</h4>
          <h4 className="text-6xl md:text-8xl font-bold">
            Fullstack Developer
          </h4>
          <p className="text-2xl md:text-3xl max-w-topChar">
            Welcome to my portfolio! I'm a Noly Canlas Jr. software developer
            with 2+ years of experience in software development. Check out
            examples of my work and find more information about my skills,
            experience, and technologies here. If you have a project in mind,
            let's talk! I'm always ready for new challenges.
          </p>
          <div className="w-full flex gap-10 items-center justify-center">
            <CustomButton
              type="submit"
              dl={pdfs.CV}
              icon={<AiOutlineDownload size="2rem" />}
            >
              CV
            </CustomButton>
            <CustomButton onClick={() => handleScroll('projects')}>
              Hire Me
            </CustomButton>
          </div>
        </div>
        <div
          className="flex justify-center items-center md:h-screen w-auto 2xl:mr-[-150px]"
          data-aos="fade-left"
        >
          <img
            src={images.homePic}
            alt="dp"
            className="drop-shadow-4xl h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;

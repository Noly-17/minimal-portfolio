import React, { forwardRef, useContext } from 'react';
import { NavigationContext } from '../../context/navContext';
import { images } from '../../assets';
import { Link } from 'react-router-dom';
import CustomButton from '../button';
import CircleNav from '../circle-nav';
import Nav from '../nav';

const TopNav = () => {
  return (
    <div>
      <CircleNav />
      <Nav />
    </div>
  );
};

const HeroPage = () => {
  const { navRef } = useContext(NavigationContext);

  return (
    <>
      <TopNav />
      <div
        id="home"
        className="h-screen flex gap-16 flex-col sm:flex-row  items-center bg-gradient-to-r from-[#dfb17a] to-primary justify-end md:justify-center max-w-full"
      >
        <div className="nav flex flex-col gap-10 text-center drop-shadow-3xl text-white sm:w-[360px] p-10">
          <h4 className="text-7xl font-bold">Hi, I'm Noly,</h4>
          <h4 className="text-8xl font-bold">Web Developer</h4>
          <p className="text-3xl ">
            Many suffered under this law, but the ultimate effect was to invest
            the press with new popularity, and very soon the newspapers
            conceived a device which effectually protected their literary staff,
            for they employed dummy editors whose sole function was to go to
            prison in lieu of the true editor
          </p>
          <div className="w-full flex gap-10 items-center justify-center">
            <CustomButton>Download My CV</CustomButton>
            <CustomButton>CV</CustomButton>
          </div>
        </div>
        <div className=" ml-18 flex justify-end h-screen w-auto ml-16">
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

export default forwardRef(HeroPage);

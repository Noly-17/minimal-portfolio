import React from 'react';
import Card from '../card';
import { gifs } from '../../assets';

const Services = () => {
  return (
    <div
      id="services"
      className="pb-16 pt-14 md:h-[300px] bg-gradient-to-r from-[#838295] to-secondary  flex flex-col items-center justify-center gap-10 md:pb-0  md:pt-52"
    >
      <h3 className="text-white text-4xl">Services</h3>
      <div className="nav grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-20">
        <Card srcImage={gifs.fronDev} char="FRONTEND DEVELOPMENT" />
        <Card srcImage={gifs.backDev} char="BACKEND DEVELOPMENT" />
        <Card srcImage={gifs.mobileDev} char="MOBILE DEVELOPMENT" />
        <Card srcImage={gifs.softDev} char="SOFTWARE DEVELOPMENT" />
      </div>
    </div>
  );
};

export default Services;

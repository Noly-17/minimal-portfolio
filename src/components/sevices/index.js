import React from 'react';
import Card from '../card';
import { gifs } from '../../assets';

const Services = () => {
  return (
    <div
      id="services"
      className="pb-16 px-5 pt-8 xl:pt-[120px] 2xl:h-[400px] bg-gradient-to-r from-[#838295] to-secondary  flex flex-col items-center justify-center gap-10 md:pb-0  md:pt-52"
    >
      <h3 className="text-white text-6xl pt-10 md:pt-28">Services</h3>
      <div className=" grid grid-cols-2 2xl:grid-cols-4 gap-5 md:gap-20 md:pb-10">
        <Card srcImage={gifs.fronDev} char="FRONTEND DEVELOPMENT" />
        <Card srcImage={gifs.backDev} char="BACKEND DEVELOPMENT" />
        <Card srcImage={gifs.mobileDev} char="MOBILE DEVELOPMENT" />
        <Card srcImage={gifs.softDev} char="SOFTWARE DEVELOPMENT" />
      </div>
    </div>
  );
};

export default Services;

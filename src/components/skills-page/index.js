import React, { useContext } from 'react';
import { NavigationContext } from '../../context/navContext';
import { images } from '../../assets';
import './styles.scss';
import SpinnigCube from '../spinning-cube';
import FadingCarousel from '../fading-carousel';

const SkillsPage = () => {
  const { ref } = useContext(NavigationContext);

  return (
    <div
      id="skills"
      className="h-[75vh] w-full bg-primary  md:gap-[500px] flex flex-col md:flex-row justify-center items-center"
    >
      <div className="flex flex-col gap-24 items-center justify-center  mb-[100px] md:mb-[0]">
        <h3 className="text-4xl">CORE SKILLS</h3>
        <SpinnigCube />
      </div>

      <div className="flex flex-col gap-16 items-center justify-center drop-shadow-4xl mb-[100px] md:mb-[0]">
        <h3 className="text-4xl">ADDITIONAL SKILLS</h3>
        <FadingCarousel />
      </div>

      {/* <div class="carousel">
        <div class="slide-container">
          <img src={images.expressLogo} alt="Image 1" />
          <img src={images.reactLogo} alt="Image 2" />
          <img src={images.nodeLogo} alt="Image 3" />
          <img src={images.mongodbLogo} alt="Image 4" />
          <img src={images.reactLogo} alt="Image 5" />
          <img src={images.expressLogo} alt="Image 1" />
          <img src={images.reactLogo} alt="Image 2" />
          <img src={images.nodeLogo} alt="Image 3" />
          <img src={images.mongodbLogo} alt="Image 4" />
          <img src={images.reactLogo} alt="Image 5" />
        </div>
        <div class="slide-container">
          <img src={images.expressLogo} alt="Image 1" />
          <img src={images.reactLogo} alt="Image 2" />
          <img src={images.nodeLogo} alt="Image 3" />
          <img src={images.mongodbLogo} alt="Image 4" />
          <img src={images.reactLogo} alt="Image 5" />
          <img src={images.expressLogo} alt="Image 1" />
          <img src={images.reactLogo} alt="Image 2" />
          <img src={images.nodeLogo} alt="Image 3" />
          <img src={images.mongodbLogo} alt="Image 4" />
          <img src={images.reactLogo} alt="Image 5" />
        </div>
        <div class="slide-container">
          <img src={images.expressLogo} alt="Image 1" />
          <img src={images.reactLogo} alt="Image 2" />
          <img src={images.nodeLogo} alt="Image 3" />
          <img src={images.mongodbLogo} alt="Image 4" />
          <img src={images.reactLogo} alt="Image 5" />
          <img src={images.expressLogo} alt="Image 1" />
          <img src={images.reactLogo} alt="Image 2" />
          <img src={images.nodeLogo} alt="Image 3" />
          <img src={images.mongodbLogo} alt="Image 4" />
          <img src={images.reactLogo} alt="Image 5" />
        </div>
      </div> */}
    </div>
  );
};

export default SkillsPage;
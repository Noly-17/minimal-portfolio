import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import HeroPage from './hero-page';
import Services from './Sevices';
import SkillsPage from './skills-page';
import AboutMe from './about-me';
import Projects from './projects-page';
import Footer from './footer';

// import Pacman from '../components/pacman';
import { NavContextProvider } from '../context/navContext';
import './App.scss';

const App = () => {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    Aos.init({
      duration: 2000,
      disable: () => windowDimension.winWidth < 1400,
    });
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension, windowDimension.winWidth]);

  return (
    <NavContextProvider>
      <HeroPage />
      <Services />
      <SkillsPage />
      <AboutMe />
      <Projects />
      <Footer />
    </NavContextProvider>
  );
};

export default App;

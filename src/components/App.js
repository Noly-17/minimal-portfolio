import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import HeroPage from './hero-page';
import Services from './Sevices';
import SkillsPage from './skills-page';
import AboutMe from './about-me';
import Projects from './projects-page';
import Footer from './footer';

import Pacman from '../components/pacman';
import { NavContextProvider } from '../context/navContext';
import './App.scss';

const App = () => {
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

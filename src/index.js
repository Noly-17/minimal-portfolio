import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './global.scss';

const root = document.querySelector('#root');
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

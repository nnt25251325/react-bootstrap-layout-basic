import React from 'react';
import { useLocation } from 'react-router-dom';

import Blank from './blank';
import Home from './home';
import Default from './default';

import './style.scss';

export default ({ children }) => {
  const location = useLocation();

  // const token = localStorage.getItem(LS_SESSION_TOKEN);

  // if (location.pathname === '/login' && token) {
  //   return <Redirect to="/" />;
  // }

  if (
    location.pathname === '/login' ||
    location.pathname === '/403' ||
    location.pathname === '/404'
  ) {
    return <Blank>{children}</Blank>;
  }

  if (location.pathname === '/') {
    return <Home>{children}</Home>;
  }

  return <Default>{children}</Default>;
};

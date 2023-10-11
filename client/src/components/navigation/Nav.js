import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MobileDropDown from './MobileDropDown';
import NavBar from './NavBar';

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <nav className='navbar'>{isMobile ? <MobileDropDown /> : <NavBar />}</nav>;
};

export default Nav;

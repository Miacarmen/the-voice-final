import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaInstagram } from "react-icons/fa";
// import { FaSquareFacebook } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
      >
        About
      </NavLink>
      <NavLink
        to='/author'
        className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
      >
        Author
      </NavLink>
      {/* <NavLink
          to='/otherbooks'
          id='other-books'
          className={({ isActive }) =>
            isActive ? 'navLink-active' : 'navLink'
          }
        >
          Other&nbsp;Books
        </NavLink> */}
      <NavLink
        to='/media'
        id='media'
        className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
      >
        Media
      </NavLink>

      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;

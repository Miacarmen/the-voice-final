import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
        <NavLink
          to='/home'
          className={({ isActive }) =>
            isActive ? 'navLink-active' : 'navLink'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'navLink-active' : 'navLink'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/author'
          className={({ isActive }) =>
            isActive ? 'navLink-active' : 'navLink'
          }
        >
          Author
        </NavLink>
        <NavLink
          to='/otherbooks'
          id='other-books'
          className={({ isActive }) =>
            isActive ? 'navLink-active' : 'navLink'
          }
        >
          Other&nbsp;Books
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'navLink-active' : 'navLink'
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

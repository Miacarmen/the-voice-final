import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaInstagram } from "react-icons/fa";
// import { FaSquareFacebook } from "react-icons/fa6";

const NavBar = () => {
  const ZIP_URL = 'https://auriclebooks.com/The-Voice-Media-Kit.zip';

  const handleDownload = () => {
    const fileName = ZIP_URL.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = ZIP_URL;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    console.log('downloaded', fileName);
  };

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
        to='/testimonials'
        id='testimonials'
        className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
      >
        Testimonials
      </NavLink>
      <p className='navLink' id='downloadLink' onClick={handleDownload}>
        Media Kit
      </p>
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

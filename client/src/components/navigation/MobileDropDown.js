import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from "react-icons/ai";


const MobileDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const menuRef = useRef();
  // const iconRef = useRef();

  // Toggle the menu when the menu icon is clicked
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close the menu
  // const closeMenu = () => {
  //   setShowMenu(false);
  // };

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
    <div className='mobileNav'>
      <div className='menu-toggle' onClick={toggleMenu}>
        {showMenu ? (
          <AiOutlineClose size={25} className='close-menu-icon' />
        ) : (
          <FiMenu size={25} className='menu-icon' />
        )}
      </div>
      {showMenu && (
        <div className='menu'>
          <ul className='menu-list'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'menuLink-active' : 'menuLink'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'menuLink-active' : 'menuLink'
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/author'
                className={({ isActive }) =>
                  isActive ? 'menuLink-active' : 'menuLink'
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                Author
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/testimonials'
                id='testimonials'
                className={({ isActive }) =>
                  isActive ? 'menuLink-active' : 'menuLink'
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                Testimonials
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'menuLink-active' : 'menuLink'
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <p className='mobileDownloadLink' onClick={handleDownload}>
                Media Kit
              </p>
            </li>
          </ul>
          <div className='nav-social-icons'>
            <div className='mobile-fb-icon pr-1'>
              <Link to='https://www.facebook.com/auriclebooks/'>
                <FaSquareFacebook />
              </Link>
            </div>
            <div className='mobile-ig-icon pl-1'>
              <Link to='https://www.instagram.com/auriclebooks/'>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;

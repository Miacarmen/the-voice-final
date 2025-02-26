import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

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
                to='/media'
                id='media'
                className={({ isActive }) =>
                  isActive ? 'menuLink-active' : 'menuLink'
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                MUFON
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
          </ul>
          <div className='nav-social-icons'>
            <div className='mobile-fb-icon pr-1'>
              <a
                href='https://www.facebook.com/auriclebooks/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaSquareFacebook />
              </a>
            </div>
            <div className='mobile-ig-icon pl-1'>
              <a
                href='https://www.instagram.com/auriclebooks/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;

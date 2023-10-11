import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

const MobileDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();
  const iconRef = useRef();

  // Toggle the menu when the menu icon is clicked
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  // Event listener to handle clicks outside of the component
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !iconRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showMenu]);

  return (
    <div className='mobileNav'>
      <div className='menu-icon-container' onClick={toggleMenu} ref={iconRef}>
        <FiMenu
          size={25}
          className='menu-icon'
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {showMenu && (
        <div className='menu' ref={menuRef}>
          <ul className='menu-list'>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive ? 'menuLink-active' : 'menuLink'
              }
              onClick={() => setShowMenu(!showMenu)}
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
                to='/otherbooks'
                id='other-books'
                className={({ isActive }) =>
                  isActive ? 'menuLink-active' : 'menuLink'
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                Other&nbsp;Books
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
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;

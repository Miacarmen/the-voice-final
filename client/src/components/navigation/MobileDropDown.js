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
              to='/'
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
              <p
                className='navLink'
                id='mobileDownloadLink'
                onClick={handleDownload}
              >
                Media Kit
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;

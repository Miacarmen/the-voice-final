import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer footer-center p-10'>
      <div>
        <h2 className='footerHead pb-3'>The Voice</h2>
        <p className='footerContent pb-2'>
          Check out our other publications from our parent company
          <a
            href='https://www.hearingproblems.com/index.htm'
            alt='auricle ink publishers'
            id='webLink'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Auricle Ink Publishers
          </a>
        </p>
        <div className='social-icons pb-2'>
          <div className='fb-icon'>
            <a
              href='https://www.facebook.com/auriclebooks/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSquareFacebook />
            </a>
          </div>
          <div className='ig-icon'>
            <a
              href='https://www.instagram.com/auriclebooks/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <p>Copyright © 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

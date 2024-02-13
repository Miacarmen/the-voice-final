import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer footer-center p-10'>
      <div>
        <a href='/#hero' alt='link to home'>
          <h2 className='footerHead pb-3'>The Voice</h2>
        </a>
        <p className='footerContent pb-2'>
          Check out our other publications from our parent company
          <Link to='https://www.hearingproblems.com/index.htm'
            alt='auricle ink publishers'
            id='webLink'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Auricle Ink Publishers
          </Link>
        </p>
        <div className='rightNav pb-2'>
        <div className='fb-icon'>
        <Link to='https://www.facebook.com/auriclebooks/'>
          <FaSquareFacebook />
        </Link>
        </div>
        <div className='ig-icon'>
        <Link to='https://www.instagram.com/auriclebooks/'>
          <FaInstagram />
        </Link>
        </div>
      </div>
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <div className='footer footer-center p-10'>
      <div>
        <a href='/#hero' alt='link to home'>
          <h2 className='footerHead pb-3'>The Voice</h2>
        </a>
        <p className='footerContent pb-2'>
          Check out our other publications at
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

        <p>Copyright © 2023 - All rights reserved by Auricle Books</p>
      </div>
    </div>
  );
};

export default Footer;

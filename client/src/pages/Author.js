import React from 'react';
import { useMediaQuery } from 'react-responsive';

import AuthorBio from '../components/author-bio/AuthorBio';

import Headshot from '../assets/headshot.jpg';

const Author = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  return (
    <div>
      {isMobile ? (
        <>
          <div>
            <div className='author-content-mobile bg-base-100'>
              <h2 className='author-head'>About the Author</h2>
              <div className='img-container'>
                <img
                  src={Headshot}
                  alt='headshot'
                  id='headshot'
                  // style={{ width: 300, height: 300 }}
                />
              </div>
              <AuthorBio />
            </div>
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <>
          <div>
            <div className='author-content-tablet bg-base-100'>
              <h2 className='author-head'>About the Author</h2>
              <div className='img-container'>
                <img
                  src={Headshot}
                  alt='headshot'
                  id='headshot'
                  // style={{ width: 300, height: 300 }}
                />
              </div>
              <AuthorBio />
            </div>
          </div>
        </>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='main-container' id='author'>
            <div className='author-content bg-base-100'>
              <h2 className='author-head'>About the Author</h2>
              <div className='img-container'>
                <img
                  src={Headshot}
                  alt='headshot'
                  id='headshot'
                  // style={{ width: 300, height: 300 }}
                />
              </div>
              <AuthorBio />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Author;

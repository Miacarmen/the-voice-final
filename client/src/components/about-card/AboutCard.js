import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './aboutCard.styles.css';

const AboutCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  return (
    <div>
      {isMobile ? (
        <>
          <div className='about-content-mobile bg-base-100'>
            <div className='paragraph-container'>
              <p className='about-text'>
                <p className='py-4'>
                  Auricle Books readers may have interest in the paranormal and
                  may be searching for a better understanding of their own
                  spiritual journey. This could include Unidentified Aerial
                  Phenomena (aka UFOs); direct extraterrestrial contact
                  experiences; religion; faith; and God.
                </p>
                <br />
                <br />
                <span className='about-closing-mobile'>Happy Journeying</span>
              </p>
            </div>
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <>
          <div className='about-content-tablet bg-base-100'>
            <div className='paragraph-container'>
              <p className='about-text'>
                <p className='py-2'>
                  Auricle Books readers may have interest in the paranormal and
                  may be searching for a better understanding of their own
                  spiritual journey. This could include Unidentified Aerial
                  Phenomena (aka UFOs); direct extraterrestrial contact
                  experiences; religion; faith; and God.
                </p>
                <br />
                <br />
                <span className='about-closing-mobile'>Happy Journeying</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='main-container about-container'>
            <div className='about-content bg-base-100'>
              <p className='about-text'>
                <p className='py-3'>
                  Auricle Books readers may have interest in the paranormal and
                  may be searching for a better understanding of their own
                  spiritual journey. This could include Unidentified Aerial
                  Phenomena (aka UFOs); direct extraterrestrial contact
                  experiences; religion; faith; and God.{' '}
                </p>
              </p>
              <p className='about-closing'>Happy Journeying</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutCard;

import React from 'react';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1025 }); // For desktop and laptop devices

  return (
    <div>
      {isMobile ? (
        <>
          {/* Mobile Content */}

          <div className='about-content-mobile bg-base-100'>
            <div className='paragraph-container'>
              <p className='about-text'>
                <span id='auricle'>Auricle Books</span> is a book publisher
                dedicated to serving the general public. Readers will have a
                special interest in the paranormal and their own unfolding
                mindful spiritual quest. Specifically included in our titles
                dealing with the paranormal will be Unidentified Aerial
                Phenomena (vis a vis UFOs); direct extraterrestrial contact
                experiences; religion; faith; and God. Our titles will initially
                be written and/or edited by{' '}
                <span id='authorName'>Dr. Richard E. Carmen</span>. Future
                publications may include other writers, but at this time we are{' '}
                <span id='not'>not</span> accepting unsolicited manuscripts.
                <br />
                <br />
                <span className='about-closing-mobile'>Happy Journeying</span>
              </p>
            </div>
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <></>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='main-container about-container'>
            <div className='about-content bg-base-100'>
              <p className='about-text'>
                <span id='auricle'>Auricle Books</span> is a book publisher
                dedicated to serving the general public. Readers will have a
                special interest in the paranormal and their own unfolding
                mindful spiritual quest. Specifically included in our titles
                dealing with the paranormal will be Unidentified Aerial
                Phenomena (vis a vis UFOs); direct extraterrestrial contact
                experiences; religion; faith; and God. Our titles will initially
                be written and/or edited by{' '}
                <span id='authorName'>Dr. Richard E. Carmen</span>. Future
                publications may include other writers, but at this time we are{' '}
                <span id='not'>not</span> accepting unsolicited manuscripts.
              </p>
              <p className='about-closing'>Happy Journeying</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;

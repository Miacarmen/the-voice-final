import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Artist from '../components/artist-bio/Artist';

const ArtistBio = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1025 }); // For desktop and laptop devices
  return (
    <div>
      {isMobile ? (
        <>
          {/* Mobile Content */}

          <div className='artist-content-mobile bg-base-100'>
            <Artist />
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <></>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='main-container artist-container' id='artist'>
            <Artist />
          </div>
        </>
      )}
    </div>
  );
};

export default ArtistBio;

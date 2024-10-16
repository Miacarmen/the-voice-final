import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './artistBio.styles.css';

const Artist = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  return (
    <div>
      {isMobile ? (
        <>
          <h2 className='artist-head pb-10'>About the Artist</h2>
          <p className='artist-text'>
            <span id='artist-name' className='pr-1'>
              Alexander Volkov
            </span>{' '}
            is a Russian-American, self-taught oil painter born in St.
            Petersburg, Russia in 1960. He was so kind and gracious to be
            willing to create the cover for{' '}
            <span id='book-highlight'>The Voice</span>, perfectly capturing the
            vision. He immigrated to the U.S. decades ago and has lived and
            worked in Hunterdon County. His stunning work can be found
            represented across the country in many fine art galleries. You can
            see more of his beautiful work on his website{' '}
            <a
              href='https://www.alexandervolkovfineart.com/'
              alt='website'
              id='web-link'
              className='highlight'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </p>
          <br />
          <p className='artist-text pt-7'>
            You may also want to listen to his partner{' '}
            <span id='musician-name' className='px-1'>
              Heidi Breyer{"'"}s
            </span>{' '}
            heartfelt <span className='highlight px-1'>All Souls Lullaby</span>{' '}
            composition to a moving collage of Alexander{"'"}s beautiful oil
            paintings, which can be found{' '}
            <a
              href='https://www.youtube.com/watch?v=dhLchd7ajAE'
              alt='composition'
              id='music-link'
              className='highlight pl-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </p>
        </>
      ) : isTablet ? (
        // Tablet Content

        <>
          <h2 className='artist-head pb-10'>About the Artist</h2>
          <p className='artist-text'>
            <span id='artist-name' className='pr-1'>
              Alexander Volkov
            </span>{' '}
            is a Russian-American, self-taught oil painter born in St.
            Petersburg, Russia in 1960. He was so kind and gracious to be
            willing to create the cover for{' '}
            <span id='book-highlight'>The Voice</span>, perfectly capturing the
            vision. He immigrated to the U.S. decades ago and has lived and
            worked in Hunterdon County. His stunning work can be found
            represented across the country in many fine art galleries. You can
            see more of his beautiful work on his website{' '}
            <a
              href='https://www.alexandervolkovfineart.com/'
              alt='website'
              id='web-link'
              className='highlight'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </p>
          <br />
          <p className='artist-text pt-7'>
            You may also want to listen to his partner{' '}
            <span id='musician-name' className='px-1'>
              Heidi Breyer{"'"}s
            </span>{' '}
            heartfelt <span className='highlight px-1'>All Souls Lullaby</span>{' '}
            composition to a moving collage of Alexander{"'"}s beautiful oil
            paintings, which can be found{' '}
            <a
              href='https://www.youtube.com/watch?v=dhLchd7ajAE'
              alt='composition'
              id='music-link'
              className='highlight pl-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </p>
        </>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='artist-content bg-base-100'>
            <h2 className='artist-head pb-10'>About the Artist</h2>

            <p className='artist-text'>
              <span id='artist-name' className='pr-1'>
                Alexander Volkov
              </span>{' '}
              is a Russian-American, self-taught oil painter born in St.
              Petersburg, Russia in 1960. He was so kind and gracious to be
              willing to create the cover for{' '}
              <span id='book-highlight'>The Voice</span>, perfectly capturing
              the vision. He immigrated to the U.S. decades ago and has lived and
              worked in Hunterdon County. His stunning work can be found
              represented across the country in many fine art galleries. You can
              see more of his beautiful work on his website{' '}
              <a
                href='https://www.alexandervolkovfineart.com/'
                alt='website'
                id='web-link'
                className='highlight'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
            </p>
            <br />
            <p className='artist-text'>
              You may also want to listen to his partner{' '}
              <span id='musician-name' className='px-1'>
                Heidi Breyer{"'"}s
              </span>{' '}
              heartfelt{' '}
              <span className='highlight px-1'>All Souls Lullaby</span>{' '}
              composition to a moving collage of Alexander{"'"}s beautiful oil
              paintings, which can be found{' '}
              <a
                href='https://www.youtube.com/watch?v=dhLchd7ajAE'
                alt='composition'
                id='music-link'
                className='highlight pl-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Artist;

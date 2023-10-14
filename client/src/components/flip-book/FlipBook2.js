import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './flipBook.styles.css';

const FlipBook2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ImageLinks = [
    'https://i.imgur.com/jaH86Tx.jpg',
    'https://i.imgur.com/0sDAWbV.jpg',
    'https://i.imgur.com/jrzXAEL.jpg',
    'https://i.imgur.com/4Dmu3Ov.jpg',
    'https://i.imgur.com/qUkOH5M.jpg',
    'https://i.imgur.com/bISic6I.jpg',
    'https://i.imgur.com/s5slQSD.jpg',
    'https://i.imgur.com/EBDfgda.jpg',
    'https://i.imgur.com/S9bz0EK.jpg',
    'https://i.imgur.com/Dnz01fy.jpg',
    'https://i.imgur.com/OE6xPgl.jpg',
    'https://i.imgur.com/D4gZADO.jpg',
    'https://i.imgur.com/wH1H4Ad.jpg',
    'https://i.imgur.com/hZaphu3.jpg',
    'https://i.imgur.com/ZEqTQuV.jpg',
    'https://i.imgur.com/bfdhE3E.jpg',
    'https://i.imgur.com/kQHfV4y.jpg',
    'https://i.imgur.com/fkmIge5.jpg',
    'https://i.imgur.com/W7TXtS3.jpg',
    'https://i.imgur.com/Unnzi63.jpg',
    'https://i.imgur.com/NcMUzGd.jpg',
    'https://i.imgur.com/NOd7wFW.jpg',
    'https://i.imgur.com/sXOc6uD.jpg',
    'https://i.imgur.com/OeLTWv3.jpg',
    'https://i.imgur.com/uuHygi7.jpg',
    'https://i.imgur.com/yIpytLt.jpg',
  ];

  const totalPages = ImageLinks.length;

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageLinks.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + ImageLinks.length) % ImageLinks.length
    );
  };

  return (
    <div>
      <div className='image-container'>
        <div className='image-gallery'>
          <img
            src={ImageLinks[currentImageIndex]}
            alt={`Page ${currentImageIndex + 1}`}
            className='excerpt-page'
          />
        </div>
        <div className='book-controls'>
          <button
            className='control-btn bg-accent text-base-200 mr-5'
            onClick={goToPreviousImage}
          >
            Back
          </button>
          <span className='pageCount'>
            Page {currentImageIndex + 1} of {totalPages}
          </span>
          <button
            className='control-btn bg-accent text-base-200 ml-5'
            onClick={goToNextImage}
          >
            Next
          </button>
        </div>
        <div className='btn-container'>
          <Link to='/contact'>
            <button className=' btn preview-btn preOrderBtn'>ORDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlipBook2;

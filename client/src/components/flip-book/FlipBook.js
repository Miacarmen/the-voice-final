import React, { useState } from 'react';

import './flipBook.styles.css';

const FlipBook = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ImageLinks = [
    'https://imgur.com/YS02NEa.jpg',
    'https://imgur.com/UDEht0O.jpg',
    'https://i.imgur.com/ODaAM7b.jpg',
    'https://i.imgur.com/rpVeIPg.jpg',
    'https://i.imgur.com/JhYs5jt.jpg',
    'https://i.imgur.com/6bbNjjn.jpg',
    'https://i.imgur.com/ZT8LM3E.jpg',
    'https://i.imgur.com/Phu2cWd.jpg',
    'https://i.imgur.com/VsaPSLP.jpg',
    'https://i.imgur.com/j1CISXM.jpg',
    'https://i.imgur.com/FBNVx0g.jpg',
    'https://i.imgur.com/s6KSkAY.jpg',
    'https://i.imgur.com/C0hiv1H.jpg',
    'https://i.imgur.com/ciSpu5H.jpg',
    'https://i.imgur.com/X5d5h07.jpg',
    'https://i.imgur.com/r6EV6lw.jpg',
    'https://i.imgur.com/7sywVGe.jpg',
    'https://i.imgur.com/XjeBdzE.jpg',
    'https://i.imgur.com/vDm1GTF.jpg',
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
          <a href='https://buy.stripe.com/9AQcNd3HS8S08RWcMN' alt='stripe'>
            <button className=' btn preview-btn preOrderBtn'>PRE-ORDER</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;

import React, { useState } from 'react';

import './flipBook.styles.css';

const FlipBook = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ImageLinks = [
    'https://i.imgur.com/Cum510y.jpg',
    'https://i.imgur.com/H7tVEpU.jpg',
    'https://i.imgur.com/ODaAM7b.jpg',
    'https://i.imgur.com/rpVeIPg.jpg',
    'https://i.imgur.com/JhYs5jt.jpg',
    'https://i.imgur.com/6bbNjjn.jpg',
    'https://i.imgur.com/ZT8LM3E.jpg',
    'https://i.imgur.com/Phu2cWd.jpg',
    'https://i.imgur.com/NwIrj3t.jpg',
    'https://i.imgur.com/Wvjl7gM.jpg',
    'https://i.imgur.com/PLhat6E.jpg',
    'https://i.imgur.com/aHXHR8k.jpg',
    'https://i.imgur.com/UBQ5pny.jpg',
    'https://i.imgur.com/1iFj33Y.jpg',
    'https://i.imgur.com/l1efufI.jpg',
    'https://i.imgur.com/wOmfhIn.jpg',
    'https://i.imgur.com/fapEgKm.jpg',
    'https://i.imgur.com/ypip32z.jpg',
    'https://i.imgur.com/OS5TvN2.jpg',
    'https://i.imgur.com/YS3c70K.jpg',
    'https://i.imgur.com/6gDUwRa.jpg',
    'https://i.imgur.com/XskbX02.jpg',
    'https://i.imgur.com/j7yXExd.jpg',
    'https://i.imgur.com/tEV7Wzw.jpg',
    'https://i.imgur.com/eFzLtbc.jpg',
    'https://i.imgur.com/DqpljUf.jpg',
    'https://i.imgur.com/izQaywl.jpg',
    'https://i.imgur.com/BTvbToE.jpg',
    'https://i.imgur.com/NDRnlZg.jpg',
    'https://i.imgur.com/0YTzdEN.jpg',
    'https://i.imgur.com/ktJkh7l.jpg',
    'https://i.imgur.com/7TQh8pF.jpg',
    'https://i.imgur.com/ODfxYPp.jpg',
    'https://i.imgur.com/w1WFGVq.jpg',
    'https://i.imgur.com/gStlq8q.jpg',
    'https://i.imgur.com/tY6heMx.jpg',
    'https://i.imgur.com/dJKay82.jpg',
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

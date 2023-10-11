import React from 'react';

import FlipBook from '../components/flip-book/FlipBook';

import '../components/flip-book/flipBook.styles.css';

const BookPreview = () => {
  return (
    <div className='preview-container'>
      <div className='preview-content bg-base-100'>
        <FlipBook />
      </div>
    </div>
  );
};

export default BookPreview;

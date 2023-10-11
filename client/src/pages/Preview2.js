import React, { useState } from 'react';

import FlipBook2 from '../components/flip-book/FlipBook2';

import '../components/flip-book/flipBook.styles.css';

const Preview2 = () => {
  return (
    <div className='preview-container'>
      <div className='preview-content bg-base-100'>
        <FlipBook2 />
      </div>
    </div>
  );
};

export default Preview2;

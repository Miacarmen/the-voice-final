import React from 'react';

import Hero from '../components/hero/Hero';
import Purchase from '../components/purchase/Purchase';
import ReviewCard from '../components/review-cards/ReviewCard';

const Home = () => {
  return (
    <div className='mb-12'>
      <Hero id='hero' />
      {/* <Purchase /> */}

      <div className='review-container'>
        <ReviewCard />
      </div>
      {/* <Purchase /> */}
      {/* <div>
        <h2>Available for Purchase January 2024</h2>
      </div> */}
      <div className='media-container'>
      <button className='btn downloadBtn bg-accent'>Download Media Kit</button>
      </div>
    </div>
  );
};

export default Home;

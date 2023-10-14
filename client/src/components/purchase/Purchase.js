import React from 'react';

const Purchase = () => {
  return (
    <div className='purchase pb-10'>
      <h2 className='purchase-head pb-4'><span className='limited'>Limited</span> Quantity Available for Preorder</h2>
      <a href='https://buy.stripe.com/9AQcNd3HS8S08RWcMN' alt='stripe'>
        <button className='btn shopBtn bg-accent '>PRE-ORDER NOW</button>
      </a>
    </div>
  );
};

export default Purchase;

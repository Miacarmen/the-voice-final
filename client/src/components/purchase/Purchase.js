import React from 'react';
import { Link } from 'react-router-dom';

import './purchase.styles.css';

const Purchase = () => {
  return (
    <div className='purchase mt-24'>
      <h2 className='purchase-head pb-4'>
        Available Now on Amazon
      </h2>
      <Link to='https://buy.stripe.com/9AQcNd3HS8S08RWcMN'>
        <Link to='https://www.amazon.com/Voice-Journey-through-Eyes-Spirit/dp/0982578598/ref=sr_1_1?crid=1LK9ASSK76ZDP&keywords=the+voice+richard+carmen&qid=1706232501&s=books&sprefix=the+voice+richard+carmen%2Cstripbooks%2C141&sr=1-1'><button className='btn shopBtn bg-accent '>BUY NOW</button></Link>
      </Link>
    </div>
  );
};

export default Purchase;

import React, { useState } from 'react';
import axios from 'axios';

import ContactCard from '../components/contact-cards/ContactCard';

const Contact = () => {
  return (
    <div className='main-container mb-24'>
      <div className='contact-content bg-base-100'>
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;

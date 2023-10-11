import React from 'react';

const PurchaseCard = () => {
  return (
    <div id='contact-form'>
      <h3 className='formHeader mb-5'>Email Us to Receive Your Copy</h3>
      <div className='form-field'>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Your first name..'
            required='required'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Your last name..'
            required='required'
          />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Your Email..'
          required='required'
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          placeholder='Your Phone Number..'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          placeholder='Write something..'
          required='required'
        ></textarea>
      </div>
      <div className='form-control mt-5 flex-end'>
        <button
          className='btn contactBtn bg-accent text-base-200'
          type='submit'
          value='submit'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PurchaseCard;

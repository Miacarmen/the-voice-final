import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactCard = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const [fieldValidity, setFieldValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    message: true,
  });

  // Function to validate form fields
  const validateField = (name, value) => {
    // Set fieldValidity state to false if the value is empty
    if (value.trim() === '') {
      setFieldValidity({
        ...fieldValidity,
        [name]: false,
      });
    } else {
      // Otherwise, set fieldValidity state to true
      setFieldValidity({
        ...fieldValidity,
        [name]: true,
      });
    }

    // Validate email field
    if (name === 'email') {
      // Email validation regex
      const emailRegex = /\S+@\S+\.\S+/;

      // Set fieldValidity state to false if the email is invalid
      if (!emailRegex.test(value)) {
        setFieldValidity({
          ...fieldValidity,
          email: false,
        });
      }
    }
  };

  // Function to handle form field changes

  const handleChange = (e) => {
    // Get the name and value from the target element
    const { name, value } = e.target;

    // Validate the field
    validateField(name, value);

    // Set the state based on the name of the form field
    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'lastName') {
      setLastName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
    if (name === 'message') {
      setMessage(value);
    }
  };

  // Function to handle form submission

  const handleSubmit = (e) => {
    // Prevent the default form submit behavior
    e.preventDefault();

    const serviceId = 'service_cqp8mq7';
    const templateId = 'template_7n7hvkv';
    const publicKey = 'kSgiUtEMt4syjkMev';

    // Validate the form fields
    validateField('firstName', firstName);
    validateField('lastName', lastName);
    validateField('email', email);
    validateField('message', message);

    // Object that contains dynamic template parameters
    const templateParams = {
      to_name: 'Richard',
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    // Send email

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        
        // Update submitMessage state to show success message
        setSubmitMessage('Message successfully sent!');

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((err) => {
        console.error('Email failed to send', err);

        // Update submitMessage state to show error message
        setSubmitMessage('Message failed to send. Please try again.');
      });
  };

  return (
    <div className='contact-form'>
      <h3 className='formHeader mb-5'>Get in Touch</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <div
            className={`form-group ${
              !fieldValidity.firstName ? 'invalid' : ''
            }`}
          >
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              value={firstName}
              name='firstName'
              placeholder='Your first name..'
              required='required'
              onChange={handleChange}
            />
          </div>
          <div
            className={`form-group ${!fieldValidity.lastName ? 'invalid' : ''}`}
          >
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              value={lastName}
              name='lastName'
              placeholder='Your last name..'
              required='required'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`form-group ${!fieldValidity.email ? 'invalid' : ''}`}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            value={email}
            name='email'
            placeholder='Your Email..'
            required='required'
            onChange={handleChange}
          />
          <label htmlFor='phone'>Phone (optional) </label>
          <input
            type='tel'
            id='phone'
            value={phone || ''}
            name='phone'
            placeholder='Your Phone Number..'
            onChange={handleChange}
          />
        </div>
        <div
          className={`form-group ${!fieldValidity.message ? 'invalid' : ''}`}
        >
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            value={message}
            name='message'
            placeholder='Write something..'
            required='required'
            onChange={handleChange}
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
      </form>
      {submitMessage && <div className='submit-message'>{submitMessage}</div>}
    </div>
  );
};

export default ContactCard;

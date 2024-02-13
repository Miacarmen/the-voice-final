import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="main-container">
        <div className='error-container'>
      <h1 className='error-head'>404: Page Not Found</h1>
      <p className='error-p'>Houston, we have a problem... This page seems to be floating in space!</p>
    <Link to='/' className='error-link'>Return to Earth</Link>
    </div>
    </div>
  )
}

export default NotFound
import React from 'react';

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
      <h2 className='testimonial-head'>Witness Testimonials</h2>
      <div id='video1'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/vDFdd0T2uFE?si=6pT3kjVm02jiYaXg'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>
      <div id='video2'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/8d2GTG0uHPw?si=tsTEXf_he5ZQxXHG'
          title='YouTube video player'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';

const ReviewCard = () => {
  return (
    <div>
      <div className='card-container' id='review-1'>
        <p className='quoteText'>
          "Fascinating! Beautifully written and expressed and one of the most
          remarkable books I've read by a scientist with direct extraterrestrial
          contact who tells a compelling story that held my interest to the last
          page."
        </p>
        <p className='quoteAuthor'>Ann Eller, RN</p>
        <p className='authorTitle'>
          Former Assistant to the late famed astronomer{' '}
          <span className='quoteHighlight'>J. Allen Hynek, Ph.D.</span>,
        </p>
        <p className='quoteExtra'>
          Author of{' '}
          <span className='italic'>
            Dragon in the Sky: Prophecy from the Stars
          </span>
        </p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-2'>
        <p className='quoteText'>
          "Dr. Carmen's advanced Beings of Light transmitted some profound
          messages which may well assist you in your own quest!"
        </p>
        <p className='quoteAuthor'>Sergei Kochkin Ph.D.</p>
        <p className='authorTitle'>Research Psychologist</p>
        <p className='quoteExtra'>
          Former Executive Director of the Better Hearing Institute
        </p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-3'>
        <p className='quoteText'>
          "<span id='highlight-2'>The Voice</span> is an astonishing story
          filled with truth, enlightenment and hope for the future of our planet
          and ourselves."
        </p>
        <p className='quoteAuthor'>Rick Hurst, Actor</p>
        {/* <p className='authorTitle'>Actor</p> */}
        <p className='quoteExtra'>The Duke{"'"}s of Hazard (1980's) </p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-4'>
        <p className='quoteText'>"Chilling! Welcome to our new reality."</p>
        <p className='quoteAuthor'>Erin Sax</p>
        <p className='authorTitle'>Film Director, Singer, Songwriter</p>
        {/* <hr className='line' /> */}
      </div>
    </div>
  );
};

export default ReviewCard;

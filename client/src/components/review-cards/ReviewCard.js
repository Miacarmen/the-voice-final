import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './review-card-styles.css';

const ReviewCard = () => {
  useEffect(() => {
    Aos.init({ duration: 800, easing: 'ease-in' });
  }, []);

  return (
    <div>
      <div className='card-container' id='review-1' data-aos='fade-up'>
        <p className='quoteText'>
          "Fascinating! Beautifully written and expressed and one of the most
          remarkable books I've read by a scientist with direct extraterrestrial
          contact who tells a compelling story that held my interest to the last
          page."
        </p>
        <p className='quoteAuthor'>Ann Eller, RN, NP</p>
        <p className='authorTitle'>
          Former Assistant to the late famed astronomer{' '}
          <span className='quoteHighlight'>J. Allen Hynek, Ph.D.</span>,
        </p>
        <p className='quoteExtra'>
          and Author of{' '}
          <span className='italic'>
            Dragon in the Sky: Prophecy from the Stars
          </span>
        </p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-2' data-aos='fade-up'>
        <p className='quoteText'>
          "Dr. Carmen's advanced Beings of Light transmitted some profound
          messages which may well assist you in your own quest!"
        </p>
        <p className='quoteAuthor'>Sergei Kochkin, Ph.D.</p>
        <p className='authorTitle'>Research Psychologist</p>
        <p className='quoteExtra'>
          Former Executive Director of the Better Hearing Institute
        </p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-3' data-aos='fade-up'>
        <p className='quoteText'>
          "<span id='highlight-2'>The Voice</span> is an astonishing story
          filled with truth, enlightenment and hope for the future of our planet
          and ourselves."
        </p>
        <p className='quoteAuthor'>Rick Hurst, Actor</p>
        {/* <p className='authorTitle'>Actor</p> */}
        <p className='authorTitle'>
          The Duke{"'"}s of Hazard (1980's TV Show){' '}
        </p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-4' data-aos='fade-up'>
        <p className='quoteText'>"Chilling! Welcome to our new reality."</p>
        <p className='quoteAuthor'>Erin Sax</p>
        <p className='authorTitle'>Film Director, Singer, Songwriter</p>
        {/* <hr className='line' /> */}
      </div>
    </div>
  );
};

export default ReviewCard;

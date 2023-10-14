import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import SAReviewCard from '../review-cards/SAReviewCard';

import './otherbook.styles.css';

const OtherBook = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  return (
    <div>
      {isMobile ? (
        <>
          <div className='book2-content-mobile bg-base-100 shadow-black'>
            <div className=' text-secondary'>
              <h2 className='book2-head text-accent'>Sedona Awakenings</h2>

              <figure className='book2-image-container m-5'>
                <img
                  src='https://i.imgur.com/mdWxHCK.png'
                  alt='sedona awakenings'
                  className='book2CoverImg'
                />
              </figure>
              <div className='paragraph-container'>
                <p className='book2-back'>
                  Something is happening in Sedona Arizona! There is an
                  unexplained gathering of people. The energy is changing lives.
                  It{"'"}s transforming dreams into a new reality. It{"'"}s
                  connecting people to a Light within. This anthology comprises
                  21 intriguing true stories of how people are experiencing
                  life-altering shifts as a result of the magic that is Sedona.
                </p>
                <br />

                <p className='book2-back'>
                  Follow these compelling adventures through otherwordly quests,
                  lucid dreams, curious meditations, unexpected visions,
                  mystical signs, mysterious voices, death of a loved one, and
                  more.
                </p>
                <br />
                <p className='book2-back'>
                  You may laugh, you may cry. You may even become enlightened.
                  But you will be trying to unveil the mysteries of how a little
                  outpost in the mountains of Northern Arizona has had so
                  profound an affect on so many lives.
                </p>
              </div>

              <div className='book2-control'>
                <a
                  href='https://buy.stripe.com/4gw7sTceoeck9W0dQS'
                  alt='stripe'
                >
                  <button className='btn orderBtn'>Order</button>
                </a>
                <Link to='/bookexcerpt2'>
                  <button className='btn preview-btn'>Read a Preview</button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <SAReviewCard />
          </div>
          <div className='book2-control-bottom mb-4'>
            <a href='https://buy.stripe.com/4gw7sTceoeck9W0dQS' alt='stripe'>
              <button className='btn orderBtn-bottom bg-accent text-base-200'>
                Order
              </button>
            </a>
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <>
          <div className='book2-content-tablet bg-base-100 shadow-black'>
            <div className=' text-secondary'>
              <h2 className='book2-head text-accent'>Sedona Awakenings</h2>

              <figure className='book2-image-container m-5'>
                <img
                  src='https://i.imgur.com/mdWxHCK.png'
                  alt='sedona awakenings'
                  className='book2CoverImg'
                />
              </figure>
              <div className='preview-control'>
                <Link to='/bookexcerpt2'>
                  <button className='btn preview-btn'>Read a Preview</button>
                </Link>
              </div>
              <div className='paragraph-container'>
                <p className='book2-back pb-5 pt-2'>
                  Something is happening in Sedona Arizona! There is an
                  unexplained gathering of people. The energy is changing lives.
                  It{"'"}s transforming dreams into a new reality. It{"'"}s
                  connecting people to a Light within. This anthology comprises
                  21 intriguing true stories of how people are experiencing
                  life-altering shifts as a result of the magic that is Sedona.
                </p>
                <br />

                <p className='book2-back pb-5'>
                  Follow these compelling adventures through otherwordly quests,
                  lucid dreams, curious meditations, unexpected visions,
                  mystical signs, mysterious voices, death of a loved one, and
                  more.
                </p>
                <p className='book2-back pb-3'>
                  You may laugh, you may cry. You may even become enlightened.
                  But you will be trying to unveil the mysteries of how a little
                  outpost in the mountains of Northern Arizona has had so
                  profound an affect on so many lives.
                </p>
              </div>

              <div className='book2-control'>
                <a
                  href='https://buy.stripe.com/4gw7sTceoeck9W0dQS'
                  alt='stripe'
                >
                  <button className='btn orderBtn'>Order</button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <SAReviewCard />
          </div>
          <div className='book2-control-bottom'>
            <a href='https://buy.stripe.com/4gw7sTceoeck9W0dQS' alt='stripe'>
              <button className='btn orderBtn-bottom bg-accent text-base-200 mb-5'>
                Order
              </button>
            </a>
          </div>
        </>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='main-container'>
            <div className='book2-content grid grid-cols-2 bg-base-100 shadow-black'>
              <div className=' text-secondary'>
                <h2 className='book2-head text-accent text-lg'>
                  Sedona Awakenings
                </h2>

                <p className='book2-back'>
                  Something is happening in Sedona Arizona! There is an
                  unexplained gathering of people. The energy is changing lives.
                  It{"'"}s transforming dreams into a new reality. It{"'"}s
                  connecting people to a Light within. This anthology comprises
                  21 intriguing true stories of how people are experiencing
                  life-altering shifts as a result of the magic that is Sedona.
                </p>
                <br />
                <p className='book2-back'>
                  Follow these compelling adventures through otherwordly quests,
                  lucid dreams, curious meditations, unexpected visions,
                  mystical signs, mysterious voices, death of a loved one, and
                  more.
                </p>
                <br />
                <p className='book2-back'>
                  You may laugh, you may cry. You may even become enlightened.
                  But you will be trying to unveil the mysteries of how a little
                  outpost in the mountains of Northern Arizona has had so
                  profound an affect on so many lives.
                </p>

                <div className='book2-control'>
                  <a
                    href='https://buy.stripe.com/4gw7sTceoeck9W0dQS'
                    alt='stripe'
                  >
                    <button className='btn orderBtn'>Order</button>
                  </a>
                </div>
              </div>

              <figure className='book2-image m-5'>
                <img
                  src='https://i.imgur.com/sMVOF9v.png'
                  alt='sedona awakenings'
                  style={{ width: 600, height: 500 }}
                  id='bookCoverImg'
                />
              </figure>

              <Link to='/bookexcerpt2'>
                <button className='btn preview-btn'>Read a Preview</button>
              </Link>
            </div>
          </div>
          <div>
            <SAReviewCard />
          </div>
          <div className='book2-control-bottom'>
            <a href='https://buy.stripe.com/4gw7sTceoeck9W0dQS' alt='stripe'>
              <button className='btn orderBtn-bottom bg-accent text-base-200 mb-5'>
                Order
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default OtherBook;

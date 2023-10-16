import React from 'react';

import { AiFillStar } from 'react-icons/ai';

import './review-card-styles.css';

const SAReviewCard = () => {
  return (
    <div>
      <div className='card-container' id='review-1'>
        <p className='SA-Quote-Text'>
          "A wonderful book about following your heart. It will especially
          resonate with you if you have visited, considered visiting or have
          considered living in the extraordinary little town of Sedona, Arizona.
          The book shares the experience of "the calling" that led so many
          people to move there.... The land has an intangible yet powerfully
          mystical and irresistible attraction to those who have chosen to live
          there. Sedona Awakenings will empower you to see how it's possible to
          fall in love with life simply by living in a place that fills you with
          the true magic of creation every day."
        </p>
        <p className='quoteAuthor'>Michael Norwood</p>
        {/* <p className='rating'>5.0 out of 5 stars "A Call of the Soul"</p> */}
        <div className='rating rating-xs'>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
        </div>
        <p className='rating'>5.0 out of 5 stars "A Call of the Soul"</p>
        <p className='amazon-title italic'>Review from Amazon</p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-2'>
        <p className='SA-Quote-Text'>
          "One thing that many residents have in common is a fantastic story
          about how they came to live in this awe inspiring town. Richard Carmen
          has done a great job.... When you're finished, you may feel called to
          Sedona for a visit. Who knows, before long you might have a Sedona
          story of your own."
        </p>
        <p className='quoteAuthor'>Sheri L.</p>
        <div className='rating rating-xs'>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
        </div>
        <p className='rating'>5.0 out of 5 stars "Inspiring Stories</p>
        <p className='amazon-title italic'>Review from Amazon</p>
        {/* <hr className='line' /> */}
      </div>

      <div className='card-container' id='review-3'>
        <p className='SA-Quote-Text'>
          "A fascinating collection of personal memoirs celebrating the human
          experience, distinctly characterized by each writer's response to a
          felt sense of having been `called' to the supremely-charged,
          breathtaking beauty of the red rocks of Sedona.... Each chapter
          reveals a particular aspect of the extraordinary magnetism of this
          other-worldly locale, evoking a sense of place through personal
          exploration, centered on initial attraction, accompanied by a
          redefinition of the term `coincidence'' followed by a period of
          self-assessment and the resulting unfoldment of provocative,
          life-changing experience.... Highly recommended for all true explorers
          of the inner and outer worlds."
        </p>
        <p className='quoteAuthor'>M Timms</p>
        <div className='rating rating-xs'>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
         <AiFillStar className='star' ></AiFillStar>
        </div>
        <p className='rating'>5.0 out of 5 stars "Evocative Portraits" </p>
        <p className='amazon-title italic'>Review from Amazon</p>
        {/* <hr className='line' /> */}
      </div>
    </div>
  );
};

export default SAReviewCard;

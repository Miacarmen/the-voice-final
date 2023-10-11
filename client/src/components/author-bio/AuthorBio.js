import React from 'react';

const AuthorBio = () => {
  return (
    <div>
      <p className='author-text'>
        <span id='author-name' className='pr-1'>
          Richard E. Carmen
        </span>{' '}
        holds three academic degrees in mainstream science with a Doctor of
        Audiology from the Kirksville College of Osteopathic Medicine. Spanning
        over half a century he has served the deaf, deaf-blind, hard of hearing
        and underprivileged. He{"'"}s been an award-winning author with over 50
        feature articles, cover stories, chapters, books and peer-reviewed
        scientific papers published within and outside the hearing industry. His
        work has appeared in top medical periodicals such as the
        <span className='highlight'> American Journal of Otology</span>; in the
        long-running eminent magazine
        <span className='highlight'> The Saturday Evening Post</span>; and op-ed
        pieces in industry publications and on
        <span className='highlight'> CBS 60 Minutes</span>. Richard has been a
        consultant to state and federal governments, participated in think- tank
        forums and served on eight national boards as editorial consultant
        and/or adviser including the acclaimed
        <span className='highlight2'> Better Hearing Institute</span>.
      </p>
      <p className='pt-5 author-text'>
        Before creating his own book publishing company in 1997, he authored
        books with
        <span className='highlight2'>
          {' '}
          Little, Brown &amp; Co; Prentice-Hall; G.K. Hall; and Rodale Press
        </span>
        . Through his publishing endeavors and research he teamed up with over a
        hundred scholars from around the world with scientists from such
        renowned U.S. institutions as Harvard, Johns Hopkins, Children{"'"}s
        Hospital, Mayo Clinic and NIH. His most successful book broke a record
        in the hearing industry
        <span className='highlight'>
          {' '}
          selling more than a million copies
        </span>{' '}
        in all editions. Through Guidepoint Global, Inc. he has consulted with
        Fortune 500 companies on mergers and acquisitions.
      </p>
      <p className='pt-5 author-text'>
        By the end of 1984, he was audiologic team leader in a collaborative
        study with otolaryngologists pioneering a new methodology for diagnosing
        diabetes by means of an audiometric configuration. A separate scientific
        team he and a colleague headed up while he directed audiology research
        at the VA Hospital, Sepulveda, California, discovered that relaxation
        procedures for tinnitus sufferers resulted in effective treatment.
      </p>
    </div>
  );
};

export default AuthorBio;

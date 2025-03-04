import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  return (
    <div>
      {isMobile ? (
        <>
          <div className='book-content text-secondary'>
            <h1 className='cardTitle text-accent'>THE VOICE</h1>
            <h2 className='cardSubtitle'>
              Based on real people, actual events, and direct extraterrestrial
              contact
            </h2>
            <h3 className='subtitle'>Available Now on Amazon</h3>
            <a
              href='https://www.amazon.com/Voice-Journey-through-Eyes-Spirit/dp/0982578598/ref=sr_1_1?crid=1LK9ASSK76ZDP&keywords=the+voice+richard+carmen&qid=1706232501&s=books&sprefix=the+voice+richard+carmen%2Cstripbooks%2C141&sr=1-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn shopBtn bg-accent mb-9'>BUY NOW</button>
            </a>

            <figure className='m-5 bookImgContainer mobile-first'>
              <img
                src='https://i.imgur.com/h0RqrBG.png'
                alt='Book Cover'
                className='bookCoverImg'
              />

              <Link to='/artistbio'>
                <div className='artist-link pt-5'>
                  Learn About the Artist Behind the Cover
                </div>
              </Link>
            </figure>
            <Link to='/bookexcerpt'>
              <button className='btn preview-btn'>Book Excerpts</button>
            </Link>

            <div className='paragraph-container'>
              <p className='book-back pb-5'>
                Dr. Richard E. Carmen is a well-published Doctor of Audiology. After
                40 years of silence he{"'"}s stepping forward with an astounding{' '}
                <span className='hero-highlight pl-1'>
                  {' '}
                  factual extraterrestrial contact and Divine intervention
                </span>{' '}
                story. Dr. Carmen had his first encounter when he was just a
                young boy. Thirty years later working as a research scientist he
                was determined to make his reconnection. He was even willing to
                give up everything to achieve it. He put his career on hold and
                began living like a monk in the city. Six months into his quest
                an extraterrestrial group reached out to him with an invitation
                to witness their presence. They set the date three months hence.
              </p>
              <p className='book-back pb-5'>
                During those 90 days, his family, friends, colleagues, even
                neighbors and their young children began witnessing astonishing
                contact events with him. Situations were clearly being
                manipulated in extraordinary ways. People began walking into his
                life. Nationally known Pastor Jack was convinced he was Godsent.
                Clinical psychologist Jo at first objectified his experiences
                until she herself became a witness. Medium Adele provided
                evidence of life after death. He met notable author, inventor
                and scientist Andrija Puharich, MD, who introduced him to a
                “star child” with unearthly abilities. Through prior
                extraterrestrial contact, Dr. Puharich had received knowledge of
                the New Physics that supports the science behind paranormal
                activity. In the meantime, Dr. Carmen had been receiving ongoing
                spiritual guidance from a mysterious and loving Voice.
              </p>
              <p className='book-back pb-5'>
                Advanced forms of life have been watching and waiting for the
                moment to make their global appearance. Many eyes and hearts are
                now being opened to this emerging reality. As more and more
                like-minded people share their truths, it is setting the stage
                for our long-hoped-for planetary awakening.
              </p>
              <p className='book-back'>
                All of these experiences transformed his understanding of
                religion, faith and God. He's come to realize that to bring
                change to the world, this family of Off-Planet Intelligence does
                not kill to conquer. They open hearts that enable us to see
                through the eyes of spirit.
              </p>
            </div>
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <>
          <div className='book-content text-secondary'>
            <h1 className='cardTitle text-accent'>THE VOICE</h1>
            <h2 className='cardSubtitle'>
              Based on real people, actual events, and direct extraterrestrial
              contact
            </h2>
            <h3 className='subtitle'>Available Now on Amazon</h3>
            <a
              href='https://www.amazon.com/Voice-Journey-through-Eyes-Spirit/dp/0982578598/ref=sr_1_1?crid=1LK9ASSK76ZDP&keywords=the+voice+richard+carmen&qid=1706232501&s=books&sprefix=the+voice+richard+carmen%2Cstripbooks%2C141&sr=1-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn shopBtn bg-accent mb-9'>BUY NOW</button>
            </a>

            <figure className='m-5 bookImgContainer mobile-first'>
              <img
                src='https://i.imgur.com/h0RqrBG.png'
                alt='Book Cover'
                className='bookCoverImg'
              />
              {/* <Link to='/downloads'>
                <div className='download-link pt-5'>Download Book Cover</div>
                </Link> */}
              <Link to='/artistbio'>
                <div className='artist-link pt-5'>
                  Learn About the Artist Behind the Cover
                </div>
              </Link>
            </figure>
            <Link to='/bookexcerpt'>
              <button className='btn preview-btn'>Book Excerpts</button>
            </Link>

            <div className='paragraph-container'>
              <p className='book-back pb-5'>
                Dr. Richard E. Carmen is a well-published Doctor of Audiology. After
                40 years of silence he{"'"}s stepping forward with an astounding{' '}
                <span className='hero-highlight pl-1'>
                  {' '}
                  factual extraterrestrial contact and Divine intervention
                </span>{' '}
                story. Dr. Carmen had his first encounter when he was just a
                young boy. Thirty years later working as a research scientist he
                was determined to make his reconnection. He was even willing to
                give up everything to achieve it. He put his career on hold and
                began living like a monk in the city. Six months into his quest
                an extraterrestrial group reached out to him with an invitation
                to witness their presence. They set the date three months hence.
              </p>
              <p className='book-back pb-5'>
                During those 90 days, his family, friends, colleagues, even
                neighbors and their young children began witnessing astonishing
                contact events with him. Situations were clearly being
                manipulated in extraordinary ways. People began walking into his
                life. Nationally known Pastor Jack was convinced he was Godsent.
                Clinical psychologist Jo at first objectified his experiences
                until she herself became a witness. Medium Adele provided
                evidence of life after death. He met notable author, inventor
                and scientist Andrija Puharich, MD, who introduced him to a
                “star child” with unearthly abilities. Through prior
                extraterrestrial contact, Dr. Puharich had received knowledge of
                the New Physics that supports the science behind paranormal
                activity. In the meantime, Dr. Carmen had been receiving ongoing
                spiritual guidance from a mysterious and loving Voice.
              </p>
              <p className='book-back pb-5'>
                Advanced forms of life have been watching and waiting for the
                moment to make their global appearance. Many eyes and hearts are
                now being opened to this emerging reality. As more and more
                like-minded people share their truths, it is setting the stage
                for our long-hoped-for planetary awakening.
              </p>
              <p className='book-back'>
                All of these experiences transformed his understanding of
                religion, faith and God. He's come to realize that to bring
                change to the world, this family of Off-Planet Intelligence does
                not kill to conquer. They open hearts that enable us to see
                through the eyes of spirit.
              </p>
            </div>
          </div>
        </>
      ) : (
        // Desktop and Laptop Content
        <>
          <div className='main-container'>
            <div className='hero-container bg-base-100 shadow-black'>
              <div className='hero-header'>
                <h2 className='cardTitle text-accent'>THE VOICE</h2>
                <h3 className='cardSubtitle'>
                  Based on real people, actual events, and direct
                  extraterrestrial contact
                </h3>
              </div>
              <div className='hero-content grid grid-cols-2 '>
                <div className='book-content text-secondary'>
                  {/* <h2 className='cardTitle text-accent'>THE VOICE</h2>
                <h3 className='cardSubtitle'>Based on real people, actual events, and direct extraterrestrial contact</h3> */}
                  <h3 className='subtitle'>Available Now on Amazon</h3>
                  <a
                    href='https://www.amazon.com/Voice-Journey-through-Eyes-Spirit/dp/0982578598/ref=sr_1_1?crid=1LK9ASSK76ZDP&keywords=the+voice+richard+carmen&qid=1706232501&s=books&sprefix=the+voice+richard+carmen%2Cstripbooks%2C141&sr=1-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='btn shopBtn bg-accent mb-9'>
                      BUY NOW
                    </button>
                  </a>

                  <div className='paragraph-container'>
                    <p className='book-back pb-5'>
                      Dr. Richard E. Carmen is a well-published Doctor of Audiology.
                      After 40 years of silence he{"'"}s stepping forward with
                      an astounding{' '}
                      <span className='hero-highlight pl-1'>
                        {' '}
                        factual extraterrestrial contact and Divine intervention
                      </span>{' '}
                      story. Dr. Carmen had his first encounter when he was just
                      a young boy. Thirty years later working as a research
                      scientist he was determined to make his reconnection. He
                      was even willing to give up everything to achieve it. He
                      put his career on hold and began living like a monk in the
                      city. Six months into his quest an extraterrestrial group
                      reached out to him with an invitation to witness their
                      presence. They set the date three months hence.
                    </p>
                    <p className='book-back pb-5'>
                      During those 90 days, his family, friends, colleagues,
                      even neighbors and their young children began witnessing
                      astonishing contact events with him. Situations were
                      clearly being manipulated in extraordinary ways. People
                      began walking into his life. Nationally known Pastor Jack
                      was convinced he was Godsent. Clinical psychologist Jo at
                      first objectified his experiences until she herself became
                      a witness. Medium Adele provided evidence of life after
                      death. He met notable author, inventor and scientist
                      Andrija Puharich, MD, who introduced him to a “star child”
                      with unearthly abilities. Through prior extraterrestrial
                      contact, Dr. Puharich had received knowledge of the New
                      Physics that supports the science behind paranormal
                      activity. In the meantime, Dr. Carmen had been receiving
                      ongoing spiritual guidance from a mysterious and loving
                      Voice.
                    </p>

                    <p className='book-back pb-5'>
                      Advanced forms of life have been watching and waiting for
                      the moment to make their global appearance. Many eyes and
                      hearts are now being opened to this emerging reality. As
                      more and more like-minded people share their truths, it is
                      setting the stage for our long-hoped-for planetary
                      awakening.
                    </p>

                    <p className='book-back'>
                      All of these experiences transformed his understanding of
                      religion, faith and God. He's come to realize that to
                      bring change to the world, this family of Off-Planet
                      Intelligence does not kill to conquer. They open hearts
                      that enable us to see through the eyes of spirit.
                    </p>
                  </div>
                </div>

                <div className='bookImgContainer pb-16'>
                  <figure className=' mobile-first'>
                    <img
                      src='https://i.imgur.com/h0RqrBG.png'
                      alt='Book Cover'
                      className='bookCoverImg'
                    />

                    <Link to='/artistbio'>
                      <div className='artist-link pt-5'>
                        Learn About the Artist Behind the Cover
                      </div>
                    </Link>

                    <Link to='/bookexcerpt'>
                      <button className='btn preview-btn'>Book Excerpts</button>
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;

import React from 'react';
import ReviewCard from '../components/review-cards/ReviewCard';

const Media = () => {
  const ZIP_URL = 'https://auriclebooks.com/The-Voice-Media-Kit.zip';

  const handleDownload = () => {
    const fileName = ZIP_URL.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = ZIP_URL;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    console.log('downloaded', fileName);
  };

  return (
    <div className='media-container'>
      {/* <h2 className='media-head'>MUFON Presentation by Dr Richard Carmen</h2>
      <div id='m-pres-video'>
        <iframe
          width='700'
          height='394'
          src='https://www.youtube.com/embed/tJdMpTnOAPI?si=3RU4Jnv5g90HC94c'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div> */}
      <div className='media-kit'>
        <button className='btn media-kit-btn bg-accent' onClick={handleDownload}>
          Download Media Kit
        </button>
      </div>
      <div className='review-container-2 pt-8'>
        <ReviewCard />
      </div>
    </div>
  );
};

export default Media;

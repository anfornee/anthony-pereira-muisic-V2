import React from 'react'

const Bio = ({ images }) => {
  return (
    <div id='bio' className='load-content'>
      {images.profileImg}
      {/* <img className='bio-image' src={images.profileImg.src} alt='Profile' /> */}
      <div className='bio-container'>
        <p className='bio-text roboto'>
          Surrounded by music his entire life, Anthony learned how to fully express
          himself with melodies and sounds. He feels music is best used by telling a
          story and helping to paint an emotive picture. He resides in Orlando.
        </p>
      </div>
    </div>
  )
}
export default Bio

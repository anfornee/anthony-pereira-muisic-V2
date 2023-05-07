import React from 'react'

const Bio = ({ images }) => {
  return (
    <div id='bio' className='load-content'>
      <img className='bio-image' src={images.profileImg.src} alt='Profile' />
      <div className='bio-container'>
        <p className='bio-text roboto'>
          Surrounded by music his entire life, Anthony learned how to fully express
          himself with melodies and sounds. He feels music is best used by telling a
          story and helping to paint an emotive picture. He resides in Los Angeles,
          fully immersed in the creative culture that floods the area. While working
          on his own solo projects, Anthony also assists in the story telling process
          by providing original scores to all types of visual media.
        </p>
      </div>
    </div>
  )
}
export default Bio

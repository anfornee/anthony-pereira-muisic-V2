import React from 'react'

import profileImg from '../images/IMG_1131.JPG'

const Bio = props => {
  return (
    <div id='bio'>
      <img className='bio-image' src={profileImg} alt='Profile' />
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

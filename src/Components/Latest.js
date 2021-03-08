import React from 'react'

const Latest = ({ images }) => (
  <div id='latest'>
    <p className='latest-text roboto'>
      <a href='https://youtu.be/-M6kb3JoFZM'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>Check out the latest addition to Life Cues. Breeze 0207.</span>
      </a>
    </p>
  </div>
)

export default Latest

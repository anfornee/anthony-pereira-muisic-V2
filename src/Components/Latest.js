import React from 'react'

const Latest = ({ images }) => (
  <div id='latest' className='load-content'>
    <p className='latest-text roboto' >
      <a href='https://youtu.be/CJM0u3auj_Y'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>Watch the latest addition to my Life Cues series!</span>
      </a>
    </p>
  </div>
)

export default Latest

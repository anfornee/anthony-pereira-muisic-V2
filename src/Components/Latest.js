import React from 'react'

const Latest = ({ images }) => (
  <div id='latest' className='load-content'>
    <p className='latest-text roboto' >
      <a href='https://youtu.be/B1ExUmzh0eo'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>The first video for my new LIVE series is up.</span>
      </a>
    </p>
  </div>
)

export default Latest

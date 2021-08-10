import React from 'react'

const Latest = ({ images }) => (
  <div id='latest' className='load-content'>
    <p className='latest-text roboto' >
      <a href='https://youtu.be/FHEPhvM2TMw'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>
          Spitfire Audio parterned with Stargirl on the CW for a scoring competition. Here's my entry.
        </span>
      </a>
    </p>
  </div>
)

export default Latest

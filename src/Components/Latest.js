import React from 'react'

const Latest = ({ images }) => (
  <div id='latest' className='load-content'>
    <p className='latest-text roboto' >
      <a href='https://youtu.be/B3zWaqTqYyo'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>
          I did a track rundown for my recent original score. Check it out here.
        </span>
      </a>
    </p>
  </div>
)

export default Latest

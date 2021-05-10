import React from 'react'

const Latest = ({ images }) => (
  <div id='latest' className='load-content'>
    <p className='latest-text roboto' >
      <a href='https://youtu.be/PApYbXfAZok'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>How can we still feel creative? Hopefully, my new video can encourage you!</span>
      </a>
    </p>
  </div>
)

export default Latest

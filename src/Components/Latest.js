import React from 'react'

const Latest = ({ images }) => (
  <div id='latest' className='load-content'>
    <p className='latest-text roboto' >
      <a href='https://youtu.be/chFjs4TOHJ0'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>
          I wrote an original score for a scoring competition from producer, Jon Meyer. Check it out here.
        </span>
      </a>
    </p>
  </div>
)

export default Latest

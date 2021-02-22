import React from 'react'

const Latest = ({ images }) => (
  <div id='latest'>
    <p className='latest-text roboto'>
      <a href='https://youtu.be/2Sg3Q_3rZmM'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>Check out the first of my Life Cues. A film score for the moments that make up our lives.</span>
      </a>
    </p>
  </div>
)

export default Latest

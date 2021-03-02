import React from 'react'

const Latest = ({ images }) => (
  <div id='latest'>
    <p className='latest-text roboto'>
      <a href='https://youtu.be/VnXf1YqAAho'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>Check out my latest video where I talk about my journey and the role music has played in my life.</span>
      </a>
    </p>
  </div>
)

export default Latest

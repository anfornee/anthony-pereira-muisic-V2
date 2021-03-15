import React from 'react'

const Latest = ({ images }) => (
  <div id='latest'>
    <p className='latest-text roboto'>
      <a href='https://youtu.be/HfqYuDNvcuE'>
        <img className='latest-img' src={images.latestPost} alt='Latest Post' />
        <span className='latest-img-desc'>I got my first job as a composer! Watch the story on Youtube.</span>
      </a>
    </p>
  </div>
)

export default Latest

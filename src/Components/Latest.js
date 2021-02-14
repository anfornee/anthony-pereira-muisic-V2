import React from 'react'

const Latest = ({ images }) => (
  <div id='latest'>
    <p className='latest-text roboto'>
      <a href='https://youtu.be/uu_geNg-uXo'>
        <img className='latest-img' src={images.latestPost} alt='Patreon Post' />
        <span className='latest-img-desc'>Check out my most recent video on Youtube</span>
      </a>
    </p>
  </div>
)

export default Latest

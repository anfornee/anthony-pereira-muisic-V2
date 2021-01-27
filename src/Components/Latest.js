import React from 'react'

const Latest = ({ images }) => (
  <div id='latest'>
    <p className='latest-text roboto'>
      <a href='https://www.patreon.com/posts/hello-46624431?utm_medium=clipboard_copy&utm_source=copy_to_clipboard&utm_campaign=postshare'>
        <img className='latest-img' src={images.patreonPost} alt='Patreon Post' />
        <span className='latest-img-desc'>Check out my most recent post on Patreon</span>
      </a>
    </p>
  </div>
)

export default Latest

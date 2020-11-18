import React from 'react'

import instagram from '../images/icons/instagram.png'

const Connect = props => {
  return (
    <div id='connect'>
      <p className='email-text roboto'>
        contact@anthonypereiramusic.com
      </p>
      <a
        className='social-icons'
        href='https://www.instagram.com/anthonypereiramusic/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='icon-container'>
          <img className='social-icon-img' src={instagram} alt='instagram' />
          <p className='social-icon-text roboto'>@anthonypereiramusic</p>
        </div>
      </a>
    </div>
  )
}
export default Connect

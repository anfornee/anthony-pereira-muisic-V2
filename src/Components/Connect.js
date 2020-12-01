import React from 'react'

import Social from './Social'

const Connect = ({ images }) => {
  return (
    <div id='connect'>
      <p className='email-text roboto'>
        contact@anthonypereiramusic.com
      </p>
      <Social
        platform='youtube'
        link='https://www.youtube.com/channel/UCSFjL86stjY_ONeb-ct_cPA'
        iconSrc={images.youtubeIcon}
        username='Anthony Pereira Music'
      />
      <Social
        platform='instagram'
        link='https://www.instagram.com/anthonypereiramusic/'
        iconSrc={images.instagramIcon}
        username='@anthonypereiramusic'
      />
      <Social
        platform='twitter'
        link='https://twitter.com/anthonyp_music'
        iconSrc={images.twitterIcon}
        username='@anthonyp_music'
      />
      <div className='footer-space mobile-only' />
    </div>
  )
}
export default Connect

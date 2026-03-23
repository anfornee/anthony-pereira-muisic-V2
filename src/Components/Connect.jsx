import React from 'react'

import Social from './Social'

const Connect = ({ images }) => {
  return (
    <div id='connect' className='load-content'>
      <p className='email-text roboto'>
        contact@anthonypereiramusic.com
      </p>
      <Social
        platform='youtube'
        link='https://www.youtube.com/channel/UCSFjL86stjY_ONeb-ct_cPA'
        image={images.youtubeIcon}
        username='Anthony Pereira Music'
      />
      <Social
        platform='patreon'
        link='https://www.patreon.com/anthonypereiramusic'
        image={images.patreonIcon}
        username='Anthony Pereira Music'
      />
      <Social
        platform='soundcloud'
        link='https://soundcloud.com/anthonypereiramusic'
        image={images.soundcloudIcon}
        username='AnthonyPereiraMusic'
      />
      <Social
        platform='instagram'
        link='https://www.instagram.com/anthonypereiramusic/'
        image={images.instagramIcon}
        username='@anthonypereiramusic'
      />
      <Social
        platform='twitter'
        link='https://twitter.com/anthonyp_music'
        image={images.twitterIcon}
        username='@anthonyp_music'
      />
      <div className='footer-space mobile-only' />
    </div>
  )
}
export default Connect

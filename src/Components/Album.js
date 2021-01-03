import React from 'react'

import appleIcon from '../images/icons/001-apple.png'
import spotifyIcon from '../images/icons/002-spotify.png'

const Album = ({ title, imgSrc, links }) => (
  <div className='album roboto'>
    <div className='album-container'>
      <img
        className='album-img'
        src={imgSrc}
        alt={title + ' album art.'}
      />
      <div className='album-hover'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='service-link'
          href={links.Apple}
        >
          <img className='service-icon' src={appleIcon} alt='Apple Music' />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='service-link'
          href={links.Spotify}
        >
          <img className='service-icon' src={spotifyIcon} alt='Spotify' />
        </a>
      </div>
    </div>
    <h1 className='album-title'>{title}</h1>
  </div>
)

export default Album

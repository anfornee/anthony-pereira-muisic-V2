import React from 'react'

const Social = ({ platform, link, iconSrc, username }) => {
  return (
    <div className='social-icon-container'>
      <a
        className='social-icons'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='icon-container'>
          <div className='icon-img-container'>
            <img className='social-icon-img' src={iconSrc} alt={platform} />
          </div>
          <p className='social-icon-text roboto'>
            {username}
          </p>
        </div>
      </a>
    </div>
  )
}
export default Social

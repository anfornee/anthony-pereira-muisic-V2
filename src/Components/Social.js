import React, { useState } from 'react'

const Social = ({ platform, link, image, username }) => {
  const [iconHovered, setIconHovered] = useState('')

  const handleMouseEnter = e => {
    setIconHovered(' hovered')
  }

  const handleMouseLeave = e => {
    setIconHovered('')
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='social-icon-container'
    >
      <a
        className='social-icons'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='icon-container'>
          <div className={'icon-img-container ' + iconHovered}>
            {image}
            {/* <img className={'social-icon-img' + iconHovered} src={iconSrc} alt={platform} /> */}
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

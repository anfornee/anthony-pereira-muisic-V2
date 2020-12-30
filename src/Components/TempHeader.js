import React from 'react'

import logo from '../images/color_logo_trans_background_opt.png'

const TempHeader = () => {
  return (
    <header id='temp'>
      <h1>
        <span className='desktop-only'>FULL SITE COMING SOON</span>
        <span className='mobile-only'>
          <span className='block'>FULL SITE</span>
          <span className='block'>COMING SOON</span>
        </span>
      </h1>
      <img src={logo} alt='Anthony Pereira Music' />
    </header>
  )
}

export default TempHeader

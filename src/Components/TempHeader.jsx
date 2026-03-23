import React from 'react'

import logo from '../images/color_logo_trans_background_opt.png'

const TempHeader = ({ imagesLoaded }) => {
  return (
    <header id='temp' className={imagesLoaded ? 'loaded' : ''}>
      <img src={logo} alt='Anthony Pereira Music' />
    </header>
  )
}

export default TempHeader

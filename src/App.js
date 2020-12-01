import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss'

// Preload images for components
import profileImg from './images/IMG_1131.JPG'
import instagramIcon from './images/icons/instagram.png'
import twitterIcon from './images/icons/twitter.png'
import youtubeIcon from './images/icons/youtube.png'

// Components
import Canvas from './Components/Canvas'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SelectedContent from './Components/SelectedContent'

const images = {
  profileImg,
  instagramIcon,
  twitterIcon,
  youtubeIcon
}

const App = () => {
  const [location, setLocation] = useState('/')

  window.addEventListener('popstate', e => {
    setLocation(window.location.pathname)
  })

  return (
    <Router>
      <Canvas />
      <div id='main'>
        <Header setLocation={setLocation} />
        <Nav location={location} setLocation={setLocation} />
        <SelectedContent location={location} images={images} />
      </div>
    </Router>
  )
}

export default App

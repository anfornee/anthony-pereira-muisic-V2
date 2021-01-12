import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss'

// Preload images for components
import transitionPt1 from './images/transition_pt1_web.jpg'
import transitionPt2 from './images/transition_pt2_web.jpg'
import profileImg from './images/IMG_1131.jpeg'
import instagramIcon from './images/icons/instagram.png'
import twitterIcon from './images/icons/twitter.png'
import youtubeIcon from './images/icons/youtube.png'

// Components
import TempHeader from './Components/TempHeader'

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [location, setLocation] = useState('/')

  const images = {
    transitionPt1,
    transitionPt2,
    profileImg,
    instagramIcon,
    twitterIcon,
    youtubeIcon
  }

  const imagesArray = [
    transitionPt1,
    transitionPt2,
    profileImg,
    instagramIcon,
    twitterIcon,
    youtubeIcon
  ]

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve()
        img.onerror = reject()
      })
    })

    await Promise.all(promises)
    setImagesLoaded(true)
  }

  useEffect(() => {
    cacheImages(imagesArray)
  }, [imagesArray])

  window.addEventListener('popstate', e => {
    setLocation(window.location.pathname)
  })

  return (
    <Router>
      <Canvas />
      {
        imagesLoaded
          ? (
            <div id='main'>
              <Header setLocation={setLocation} />
              <Nav location={location} setLocation={setLocation} />
              <SelectedContent location={location} images={images} />
            </div>
          )
          : false
      }
    </Router>
  )
}

export default App

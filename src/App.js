import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss'

// Preload images for components
import transitionPt1 from './images/album_art/transition_pt1_web.jpg'
import transitionPt2 from './images/album_art/transition_pt2_web.jpg'
import thePath from './images/album_art/the_path_web.jpeg'
import profileImg from './images/IMG_3664_Edited_Small.jpeg'
import patreonIcon from './images/icons/patreon.png'
import instagramIcon from './images/icons/instagram.png'
import soundcloudIcon from './images/icons/soundcloud-logo.png'
import twitterIcon from './images/icons/twitter.png'
import youtubeIcon from './images/icons/youtube.png'
import latestPost from './images/latest-video.jpg'
import sexlessBookTB from './images/sexless_book_thumbnail.png'

// Components
import Canvas from './Components/Canvas'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SelectedContent from './Components/SelectedContent'
import TempHeader from './Components/TempHeader'
import VideoPlayer from './Components/VideoPlayer'

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [location, setLocation] = useState('/')
  const [videoPlayer, setVideoPlayer] = useState({ active: false, url: '' })

  const images = {
    transitionPt1,
    transitionPt2,
    thePath,
    profileImg,
    patreonIcon,
    instagramIcon,
    soundcloudIcon,
    twitterIcon,
    youtubeIcon,
    latestPost,
    sexlessBookTB
  }

  const imagesArray = [
    transitionPt1,
    transitionPt2,
    thePath,
    profileImg,
    patreonIcon,
    instagramIcon,
    soundcloudIcon,
    twitterIcon,
    youtubeIcon,
    latestPost,
    sexlessBookTB
  ]

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map(src => {
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.src = src
        img.onload = resolve()
        img.onerror = reject(new Error('Could not cache image'))
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
              <article>
                <TempHeader />
                <div className='wait-to-show'>
                  <Header setLocation={setLocation} />
                  <Nav location={location} setLocation={setLocation} />
                </div>
                <SelectedContent location={location} images={images} setVideoPlayer={setVideoPlayer} />
                {
                  videoPlayer.active
                    ? (
                      <VideoPlayer url={videoPlayer.url} setVideoPlayer={setVideoPlayer} />
                    )
                    : false
                }
              </article>
            </div>
          )
          : false
      }
    </Router>
  )
}

export default App

import React, { useState, useEffect, useMemo } from 'react'
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
import jonMeyerTB from './images/jon_meyer_thumbnail.png'
import stargirlTB from './images/stargirl-thumbnail.jpg'

// Components
import Canvas from './Components/Canvas'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SelectedContent from './Components/SelectedContent'
import TempHeader from './Components/TempHeader'
import VideoPlayer from './Components/VideoPlayer'

const App = () => {
  const videoPlayerInUrl = window.location.pathname.includes('video-player') || false
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [location, setLocation] = useState(window.location.pathname)
  const [videoPlayerActive, setVideoPlayerActive] = useState(videoPlayerInUrl)

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
    sexlessBookTB,
    jonMeyerTB,
    stargirlTB
  }

  const loadedImagesList = useMemo(() => [], [])
  const imagesList = {}

  useEffect(() => {
    const imagesArray = [
      { name: 'transitionPt1', src: transitionPt1 },
      { name: 'transitionPt2', src: transitionPt2 },
      { name: 'thePath', src: thePath },
      { name: 'profileImg', src: profileImg },
      { name: 'patreonIcon', src: patreonIcon },
      { name: 'instagramIcon', src: instagramIcon },
      { name: 'soundcloudIcon', src: soundcloudIcon },
      { name: 'twitterIcon', src: twitterIcon },
      { name: 'youtubeIcon', src: youtubeIcon },
      { name: 'latestPost', src: latestPost },
      { name: 'sexlessBookTB', src: sexlessBookTB },
      { name: 'jonMeyerTB', src: jonMeyerTB },
      { name: 'stargirlTB', src: stargirlTB }
    ]

    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new window.Image()
        loadImg.src = image.src
        loadImg.alt = image.name
        loadImg.onload = () => resolve({ name: image.name, image: loadImg })
        loadImg.onerror = err => reject(err)
      })
    }
    Promise.all(imagesArray.map(image => loadImage(image)))
      .then(loadedImages => loadedImagesList.push(...loadedImages))
      .then(() => setImagesLoaded(true))
      .catch(err => console.log(err))
  }, [loadedImagesList])

  if (imagesLoaded) {
    loadedImagesList.forEach(imageData => {
      imagesList[imageData.name] = imageData.image
    })
  }

  window.addEventListener('popstate', e => {
    if (window.location.pathname.includes('video-player')) {
      setVideoPlayerActive(true)
    } else setVideoPlayerActive(false)
    setLocation(window.location.pathname)
  })

  return (
    <Router>
      <TempHeader imagesLoaded={imagesLoaded} />
      {
        imagesLoaded
          ? (
            <div id='main'>
              <Canvas />
              <article>
                <div className='wait-to-show'>
                  <Header setLocation={setLocation} />
                  <Nav location={location} setLocation={setLocation} />
                </div>
                <SelectedContent location={location} images={images} setVideoPlayerActive={setVideoPlayerActive} />
                {
                  videoPlayerActive
                    ? (
                      <VideoPlayer setVideoPlayerActive={setVideoPlayerActive} />
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

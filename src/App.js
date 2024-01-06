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
import sexlessBookTB from './images/sexless_book_thumbnail.jpg'
import coppolaTB from './images/copolla_tb.jpg'
import jonMeyerTB from './images/jon_meyer_thumbnail.jpg'
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

  const loadedImagesList = useMemo(() => { return {} }, [])

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
      { name: 'coppolaTB', src: coppolaTB },
      { name: 'jonMeyerTB', src: jonMeyerTB },
      { name: 'stargirlTB', src: stargirlTB }
    ]

    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new window.Image()
        loadImg.src = image.src
        loadImg.alt = image.name
        loadImg.onload = () => {
          const imgElement = React.createElement(
            'img',
            {
              src: image.src,
              alt: image.name
            }
          )
          resolve({ name: image.name, image: imgElement })
        }
        loadImg.onerror = err => reject(err)
      })
    }
    Promise.all(imagesArray.map(image => loadImage(image)))
      .then(loadedImages => {
        for (const image of loadedImages) {
          loadedImagesList[image.name] = image.image
        }
      })
      .then(() => setImagesLoaded(true))
      .catch(err => console.log(err))
  }, [loadedImagesList])

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
                <SelectedContent location={location} images={loadedImagesList} setVideoPlayerActive={setVideoPlayerActive} />
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

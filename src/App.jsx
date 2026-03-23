import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import Canvas from './Components/Canvas'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SelectedContent from './Components/SelectedContent'
import TempHeader from './Components/TempHeader'
import VideoPlayer from './Components/VideoPlayer'

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

const App = () => {
  const videoPlayerInUrl = window.location.pathname.includes('video-player') || false
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [location, setLocation] = useState(window.location.pathname)
  const [videoPlayerActive, setVideoPlayerActive] = useState(videoPlayerInUrl)

  const loadedImagesList = useMemo(() => { return {} }, [])

  useEffect(() => {
    const imagesArray = [
      { name: 'transitionPt1', src: transitionPt1, alt: 'Transition PT. 1 album art', className: 'album-img' },
      { name: 'transitionPt2', src: transitionPt2, alt: 'Transition PT. 2 album art', className: 'album-img' },
      { name: 'thePath', src: thePath, alt: 'The Path album art', className: 'album-img' },
      { name: 'profileImg', src: profileImg, alt: 'Anthony Pereira', className: 'bio-image' },
      { name: 'patreonIcon', src: patreonIcon, alt: 'Patreon', className: 'social-icon-img' },
      { name: 'instagramIcon', src: instagramIcon, alt: 'Instagram', className: 'social-icon-img' },
      { name: 'soundcloudIcon', src: soundcloudIcon, alt: 'SoundCloud', className: 'social-icon-img' },
      { name: 'twitterIcon', src: twitterIcon, alt: 'Twitter', className: 'social-icon-img' },
      { name: 'youtubeIcon', src: youtubeIcon, alt: 'YouTube', className: 'social-icon-img' },
      { name: 'latestPost', src: latestPost, alt: '', className: 'latest-img' },
      { name: 'sexlessBookTB', src: sexlessBookTB, alt: 'Sexless in the City video thumbnail', className: 'film-img' },
      { name: 'coppolaTB', src: coppolaTB, alt: 'Coppola Wine video thumbnail', className: 'film-img' },
      { name: 'jonMeyerTB', src: jonMeyerTB, alt: 'Jon Meyer video thumbnail', className: 'film-img' },
      { name: 'stargirlTB', src: stargirlTB, alt: 'Stargirl Spitfire Audio Competition video thumbnail', className: 'film-img' }
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
              alt: image.alt,
              className: image.className
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

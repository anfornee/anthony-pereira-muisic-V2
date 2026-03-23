import React from 'react'
import { useNavigate } from 'react-router-dom'

import IndividualFilm from './IndividualFilm'

// www.youtube.com/embed/cfTCHdIOkDs
// blob:https://www.youtube.com/afceecaa-e450-4c0f-9293-0b0bf0997197
// https://i.ytimg.com/vi_webp/cfTCHdIOkDs/maxresdefault.webp

const Film = ({ images, setVideoPlayerActive }) => {
  const navigate = useNavigate()

  return (
    <div id='film' className='load-content'>
      <IndividualFilm
        image={images.sexlessBookTB}
        altText='BOOK TRAILER | SEXLESS IN THE CITY by KAT HARRIS'
        setVideoPlayerActive={setVideoPlayerActive}
        navigate={navigate}
        url='/film/video-player/sitcbt'
        displayText={[
          'BOOK TRAILER',
          'SEXLESS IN THE CITY by KAT HARRIS'
        ]}
      />
      <IndividualFilm
        image={images.coppolaTB}
        altText='STAYING CONNECTED | COPPOLA WINE'
        setVideoPlayerActive={setVideoPlayerActive}
        navigate={navigate}
        url='/film/video-player/sccw'
        displayText={[
          'STAYING CONNECTED',
          'COPPOLA WINE'
        ]}
      />
      <IndividualFilm
        image={images.jonMeyerTB}
        altText='JON MEYER SCORING COMPETITION | ORIGINAL SCORE'
        setVideoPlayerActive={setVideoPlayerActive}
        navigate={navigate}
        url='/film/video-player/jmsc'
        displayText={[
          'JON MEYER SCORING COMPETITION',
          'ORIGINAL SCORE'
        ]}
      />
      <IndividualFilm
        image={images.stargirlTB}
        altText='STARGIRL SCORING COMPETITION | ORIGINAL SCORE'
        setVideoPlayerActive={setVideoPlayerActive}
        navigate={navigate}
        url='/film/video-player/sgsc'
        displayText={[
          'STARGIRL SCORING COMPETITION',
          'ORIGINAL SCORE'
        ]}
      />
    </div>
  )
}

export default Film

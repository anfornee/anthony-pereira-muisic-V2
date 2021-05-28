import React from 'react'
import { useHistory } from 'react-router-dom'

import IndividualFilm from './IndividualFilm'

// www.youtube.com/embed/cfTCHdIOkDs
// blob:https://www.youtube.com/afceecaa-e450-4c0f-9293-0b0bf0997197
// https://i.ytimg.com/vi_webp/cfTCHdIOkDs/maxresdefault.webp

const Film = ({ images, setVideoPlayerActive }) => {
  const history = useHistory()

  return (
    <div id='film' className='load-content'>
      <IndividualFilm
        image={images.sexlessBookTB}
        altText='BOOK TRAILER | SEXLESS IN THE CITY by KAT HARRIS'
        setVideoPlayerActive={setVideoPlayerActive}
        history={history}
        url='/film/video-player/sitcbt'
        displayText={[
          'BOOK TRAILER',
          'SEXLESS IN THE CITY by KAT HARRIS'
        ]}
      />
      <IndividualFilm
        image='https://i.ytimg.com/vi_webp/cfTCHdIOkDs/maxresdefault.webp'
        altText='STAYING CONNECTED | COPPOLA WINE'
        setVideoPlayerActive={setVideoPlayerActive}
        history={history}
        url='/film/video-player/sccw'
        displayText={[
          'STAYING CONNECTED',
          'COPPOLA WINE'
        ]}
      />
    </div>
  )
}

export default Film

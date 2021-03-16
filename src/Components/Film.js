import React from 'react'
import { useHistory } from 'react-router-dom'

import IndividualFilm from './IndividualFilm'

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
    </div>
  )
}

export default Film

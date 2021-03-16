import React from 'react'
import { useHistory } from 'react-router-dom'

const Film = ({ images, setVideoPlayerActive }) => {
  const history = useHistory()

  return (
    <div id='film'>
      <div className='film-img-container'>
        <img
          className='film-img'
          src={images.sexlessBookTB}
          alt='BOOK TRAILER | SEXLESS IN THE CITY by KAT HARRIS'
        />
        <div
          className='film-img-hover'
          onClick={() => {
            history.push('/film/video-player/sitcbt')
            setVideoPlayerActive(true)
          }}
        >
          <p className='nanum'>
            <span style={{ display: 'block' }}>
              BOOK TRAILER
            </span>
            <span style={{ display: 'block' }}>
              SEXLESS IN THE CITY by KAT HARRIS
            </span>
            <span className='mobile-tap-to-view'>
              TAP TO VIEW
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Film

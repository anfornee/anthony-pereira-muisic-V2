import React from 'react'

const Film = ({ images, setVideoPlayer }) => {
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
          onClick={() => setVideoPlayer({ active: true, url: 'https://vimeo.com/519129359' })}
        >
          <p className='nanum'>
            <span style={{ display: 'block' }}>
              BOOK TRAILER
            </span>
            <span style={{ display: 'block' }}>
              SEXLESS IN THE CITY by KAT HARRIS
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Film

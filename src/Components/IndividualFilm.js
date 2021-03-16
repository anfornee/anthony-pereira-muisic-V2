import React from 'react'

const IndividualFilm = ({ image, altText, setVideoPlayerActive, history, url, displayText }) => {
  return (
    <div className='film-img-container'>
      <img
        className='film-img'
        src={image}
        alt={altText}
      />
      <div
        className='film-img-hover'
        onClick={() => {
          history.push(url)
          setVideoPlayerActive(true)
        }}
      >
        <p className='nanum'>
          <span style={{ display: 'block' }}>
            {
              displayText.map((line, i) => (
                <span key={i}>
                  <span style={{ display: 'block' }}>
                    {line}
                  </span>
                </span>
              ))
            }
          </span>
          <span className='mobile-tap-to-view'>
            TAP TO VIEW
          </span>
        </p>
      </div>
    </div>
  )
}

export default IndividualFilm

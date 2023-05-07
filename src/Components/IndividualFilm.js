import React from 'react'

const IndividualFilm = ({ image, altText, setVideoPlayerActive, navigate, url, displayText }) => {
  return (
    <div
      className='film-img-container'
      onClick={() => {
        navigate(url)
        setVideoPlayerActive(true)
      }}
    >
      <img
        className='film-img'
        src={image.src}
        alt={altText}
      />
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
      </p>
    </div>
  )
}

export default IndividualFilm

import React from 'react'
import Album from './Album'
// import AudioPlayer from './AudioPlayer'

const albumList = require('../data/albums.json')
// const trackList = require('../data/songs.json')

const Music = ({ images }) => (
  <div id='music-page' className='load-content'>
    <div className='albums'>
      {
        albumList.map((album, i) => {
          return (
            <Album
              key={i}
              title={album.title}
              imgSrc={images[album.imgSrc]}
              links={album.links}
            />
          )
        })
      }
    </div>
    {/* {
        trackList.map((track, i) => {
          return (
            <AudioPlayer
              key={i}
              title={track.title}
              duration={track.duration}
              src={track.src}
            />
          )
        })
      } */}
  </div>
)

export default Music

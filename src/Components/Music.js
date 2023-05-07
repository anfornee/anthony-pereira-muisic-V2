import React from 'react'
import Album from './Album'

const albumList = require('../data/albums.json')

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
  </div>
)

export default Music

import React from 'react'
import AudioPlayer from './AudioPlayer'

const trackList = require('../data/songs.json')

const Projects = props => {

  return (
    <div>
      <h1>Projects</h1>
      {
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
      }
    </div>
  )
}

export default Projects

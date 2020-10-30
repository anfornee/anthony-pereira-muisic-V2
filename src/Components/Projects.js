import React, { useRef } from 'react'

const Projects = props => {
  const track1 = useRef(null)
  const playSong = () => track1.current.play()
  const pauseSong = () => track1.current.pause()

  return (
    <div>
      <h1>Projects</h1>
      <audio
        ref={track1}
        controlsList='nodownload'
      >
        <source src='https://docs.google.com/uc?export=&id=1v6hDnzUSxMNKbkRO40PvqKIfV1sU8S6j' />
      </audio>
      <button onClick={playSong}>
        PLAY
      </button>
      <button onClick={pauseSong}>
        PAUSE
      </button>
    </div>
  )
}

export default Projects

import React, { useEffect, useRef, useState } from 'react'

const AudioPlayer = props => {
  const [currentTime, setCurrentTime] = useState(0)
  const track1 = useRef(null)
  const playSong = () => track1.current.play()
  const pauseSong = () => {
    track1.current.pause()
    setCurrentTime(track1.current.currentTime)
  }

  useEffect(() => {
    console.log('hello from useEffect')
    console.log(props.duration)
    console.log('Song is ' + Math.round((currentTime / props.duration) * 100) + '% listened to.')
  }, [props.duration, currentTime])

  return (
    <div>
      <h1>{props.title}</h1>
      <audio
        ref={track1}
        controlsList='nodownload'
        preload='true'
      >
        <source src={props.src} />
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

export default AudioPlayer

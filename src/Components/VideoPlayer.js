import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ setVideoPlayerActive }) => {
  const [playerReady, setPlayerReady] = useState(false)
  const history = useHistory()
  const url = window.location.pathname.split('/').pop()
  const videos = {
    sitcbt: 'https://vimeo.com/519129359',
    sccw: 'https://www.youtube.com/embed/cfTCHdIOkDs',
    jmsc: 'https://youtu.be/chFjs4TOHJ0',
    sgsc: 'https://youtu.be/FHEPhvM2TMw'
  }

  const closeVideoPlayer = () => {
    history.push('/film')
    setVideoPlayerActive(false)
  }

  return (
    <div id='video-player'>
      <div id='close-player-bg' onClick={closeVideoPlayer} />
      <h2 className='close-video-player quicksand' onClick={closeVideoPlayer}>
        CLOSE
      </h2>
      <span
        className={
          playerReady
            ? 'video-container player-ready'
            : 'video-container'
        }
      >
        <ReactPlayer
          url={videos[url]}
          controls
          title='1'
          onReady={() => setPlayerReady(true)}
          className='player'
        />
      </span>
    </div>
  )
}

export default VideoPlayer

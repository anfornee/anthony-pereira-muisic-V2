import React from 'react'
import { useHistory} from 'react-router-dom'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ setVideoPlayerActive }) => {
  const history = useHistory()
  const url = window.location.pathname.split('/').pop()
  const videos = {
    sitcbt: 'https://vimeo.com/519129359'
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
      <ReactPlayer
        url={videos[url]}
        controls='true'
        title='1'
        className='video-container'
      />
    </div>
  )
}

export default VideoPlayer

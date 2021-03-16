import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ url, setVideoPlayer }) => {
  return (
    <div id='video-player'>
      <div id='close-player-bg' onClick={() => setVideoPlayer({ active: false, url: '' })} />
      <ReactPlayer
        url={url}
        controls='1'
        title='1'
        style={{ zIndex: 1000 }}
      />
    </div>
  )
}

export default VideoPlayer

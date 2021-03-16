import React from 'react'
import { Route } from 'react-router-dom'

import Bio from './Bio'
import Connect from './Connect'
import Film from './Film'
import Latest from './Latest'
import Music from './Music'

const SelectedContent = ({ location, images, setVideoPlayer }) => {
  let isSafari = false

  if (navigator.userAgent.indexOf('Safari') !== -1) {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      isSafari = false
    } else isSafari = true
  }

  return (
    <div
      style={
        location === '/'
          ? { opacity: 0, visibility: 'hidden' }
          : { opacity: 1, visibility: 'visible' }
      }
      className={isSafari ? 'selected-content safari' : 'selected-content'}
    >
      <Route
        path='/music'
        render={() => (
          <Music images={images} />
        )}
      />
      <Route
        path='/film'
        render={() => (
          <Film images={images} setVideoPlayer={setVideoPlayer} />
        )}
      />
      <Route
        path='/bio'
        render={() => (
          <Bio images={images} />
        )}
      />
      <Route
        path='/connect'
        render={() => (
          <Connect images={images} />
        )}
      />
      <Route
        path='/latest'
        render={() => (
          <Latest images={images} />
        )}
      />
    </div>
  )
}

export default SelectedContent

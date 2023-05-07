import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Bio from './Bio'
import Connect from './Connect'
import Film from './Film'
import Latest from './Latest'
import Music from './Music'

const SelectedContent = ({ location, images, setVideoPlayerActive }) => {
  let isSafari = false

  if (navigator.userAgent.indexOf('Safari') !== -1) {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      isSafari = false
    } else isSafari = true
  }

  return (
    <div
      className={(isSafari ? 'selected-content safari' : 'selected-content') + ' wait-to-show'}
    >
      <Routes>
        <Route path='/music' element={<Music images={images} />} />
        <Route path='/film' element={<Film images={images} setVideoPlayerActive={setVideoPlayerActive} />} />
        <Route path='/bio' element={<Bio images={images} />} />
        <Route path='/connect' element={<Connect images={images} />} />
        <Route path='/latest' element={<Latest images={images} />} />
      </Routes>
    </div>
  )
}

export default SelectedContent

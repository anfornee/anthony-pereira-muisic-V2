import React from 'react'
import { Route } from 'react-router-dom'

import Bio from './Bio'
import Connect from './Connect'
import Music from './Music'

const SelectedContent = ({ location }) => {
  return (
    <div
      style={
        location === '/'
          ? { opacity: 0, visibility: 'hidden' }
          : { opacity: 1, visibility: 'visible' }
      }
      className='selected-content'
    >
      <Route path='/Music'>
        <Music />
      </Route>
      <Route path='/bio'>
        <Bio />
      </Route>
      <Route path='/connect'>
        <Connect />
      </Route>
    </div>
  )
}

export default SelectedContent

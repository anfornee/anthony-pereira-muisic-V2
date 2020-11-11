import React from 'react'
import { Route } from 'react-router-dom'

import Bio from './Bio'
import Contact from './Contact'
import Music from './Music'

const SelectedContent = ({ location }) => {
  return (
    <div
      style={
        location === '/'
          ? { opacity: 0, display: 'none' }
          : { opacity: 1, display: 'flex' }
      }
      className='selected-content'
    >
      <Route path='/Music'>
        <Music />
      </Route>
      <Route path='/bio'>
        <Bio />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </div>
  )
}

export default SelectedContent

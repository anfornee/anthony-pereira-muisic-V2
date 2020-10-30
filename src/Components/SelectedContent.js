import React from 'react'
import { Route } from 'react-router-dom'

import Bio from './Bio'
import Contact from './Contact'
import Projects from './Projects'

const SelectedContent = ({ location }) => {
  return (
    <div
      style={
        location === '/'
          ? { opacity: 0 }
          : { opacity: 1 }
      }
      className='selected-content'
    >
      <Route path='/projects'>
        <Projects />
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
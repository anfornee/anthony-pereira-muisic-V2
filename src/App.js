import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss'

// Components
import Canvas from './Components/Canvas'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SelectedContent from './Components/SelectedContent'

const App = () => {
  const [location, setLocation] = useState('/')

  window.addEventListener('popstate', e => {
    setLocation(window.location.pathname)
  })

  return (
    <Router>
      <Canvas />
      <Header setLocation={setLocation} />
      <Nav location={location} setLocation={setLocation} />
      <SelectedContent location={location} />
    </Router>
  )
}

export default App

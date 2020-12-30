import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss'

// Components
import TempHeader from './Components/TempHeader'

const App = () => {
  return (
    <Router>
      <div id='main'>
        <TempHeader />
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ setLocation }) => {
  return (
    <header>
      <Link to='/' onClick={() => setLocation('/')}>
        <h1 className='quicksand'>
          ANTHONY PEREIRA
        </h1>
      </Link>
    </header>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ setLocation }) => {
  return (
    <header>
      <Link to='/' onClick={() => setLocation('/')}>
        <h1 className='quicksand'>
          <span className='desktop-only'>ANTHONY PEREIRA</span>
          <span className='mobile-only'>
            <span className='block'>ANTHONY</span>
            <span className='block'>PEREIRA</span>
          </span>
        </h1>
      </Link>
    </header>
  )
}

export default Header

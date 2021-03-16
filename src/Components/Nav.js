import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const Nav = ({ location, setLocation }) => {
  const addHovered = e => {
    const lineToAdjust = document.getElementById(`${e.target.id.split('-')[1]}-line`)
    lineToAdjust.classList.add(`${e.target.id.split('-')[1]}-nav-hovered`)
  }

  const removeHovered = e => {
    const lineToAdjust = document.getElementById(`${e.target.id.split('-')[1]}-line`)
    lineToAdjust.classList.remove(`${e.target.id.split('-')[1]}-nav-hovered`)
  }

  return (
    <div className='nav-container'>
      <div
        className={location !== '/' ? 'nav-back-container active' : 'nav-back-container'}
        onClick={() => setLocation('/')}
      >
        <Link
          to='/'
        >
          <span className='nav-back' />
          <span className='nav-back-text'>BACK</span>
        </Link>
      </div>
      <NavItem
        addHovered={addHovered}
        removeHovered={removeHovered}
        item='music'
        location={location}
        setLocation={setLocation}
        defaultStyle={{ top: 0, opacity: 1 }}
      />
      <NavItem
        addHovered={addHovered}
        removeHovered={removeHovered}
        item='film'
        location={location}
        setLocation={setLocation}
        defaultStyle={{ top: '4em', opacity: 1 }}
      />
      <NavItem
        addHovered={addHovered}
        removeHovered={removeHovered}
        item='bio'
        location={location}
        setLocation={setLocation}
        defaultStyle={{ top: '8em', opacity: 1, zIndex: 1 }}
      />
      <NavItem
        addHovered={addHovered}
        removeHovered={removeHovered}
        item='connect'
        location={location}
        setLocation={setLocation}
        defaultStyle={{ top: '12em', opacity: 1, zIndex: 1 }}
      />
      <NavItem
        addHovered={addHovered}
        removeHovered={removeHovered}
        item='latest'
        location={location}
        setLocation={setLocation}
        defaultStyle={{ top: '16em', opacity: 1, zIndex: 1 }}
      />
    </div>
  )
}

export default Nav

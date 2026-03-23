import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ location, setLocation, item, defaultStyle, activeStyle, addHovered, removeHovered }) => (
  <div
    style={
      location === '/'
        ? defaultStyle
        : location === `/${item}`
          ? { top: 0, opacity: 1 } : { top: 0, opacity: 0, zIndex: -1 }
    }
    className='navlink-container'
    onClick={() => setLocation(`/${item}`)}
  >
    <Link to={`/${item}`}>
      <h2
        id={`nav-${item}`}
        onMouseEnter={e => addHovered(e)}
        onMouseLeave={e => removeHovered(e)}
      >
        {item.toUpperCase()}
      </h2>
    </Link>
    <div id={`${item}-line`} className={location === `/${item}` ? `${item}-hover-line ${item}-nav-active` : `${item}-hover-line`} />
  </div>
)

export default NavItem

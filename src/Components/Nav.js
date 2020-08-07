import React from 'react'

const Nav = () => {

  const addHovered = e => {
    const lineToAdjust = document.getElementById(`${e.target.id.split('-')[1]}-line`)
    lineToAdjust.classList.add(`${e.target.id.split('-')[1]}-nav-hovered`)
  }

  const removeHovered = e => {
    const lineToAdjust = document.getElementById(`${e.target.id.split('-')[1]}-line`)
    lineToAdjust.classList.remove(`${e.target.id.split('-')[1]}-nav-hovered`)
  }

  return (
    <nav>
      <h2
        id='nav-projects'
        onMouseEnter={e => addHovered(e)}
        onMouseLeave={e => removeHovered(e)}
      >
        PROJECTS
      </h2>
      <div id='projects-line' className='projects-hover-line' />
      <h2
        id='nav-bio'
        onMouseEnter={e => addHovered(e)}
        onMouseLeave={e => removeHovered(e)}
      >
        BIO
      </h2>
      <div id='bio-line' className='bio-hover-line' />
      <h2
        id='nav-contact'
        onMouseEnter={e => addHovered(e)}
        onMouseLeave={e => removeHovered(e)}
      >
        CONTACT
      </h2>
      <div id='contact-line' className='contact-hover-line' />
    </nav>
  )
}

export default Nav

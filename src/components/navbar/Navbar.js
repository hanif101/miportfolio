/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

let inHome = () => (
  <div className='container-fluid nav_secondary'>
  <Link to='/about' className='nav_link about'>about</Link>
  <Link to='/projects' className='nav_link projects'>projects</Link>
  <Link to='/skills' className='nav_link skills'>skills</Link>
</div>
)

export function Navbar({home, about, projects, skills}) {
  return (
    <div className='container-fluid nav_primary'>
      <div className='container-fluid nav_secondary'>
        {home && <Link to='/' className='nav_link home'>home</Link> }
        {about && <Link to='/about' className='nav_link about'>about</Link>}
        {projects && <Link to='/projects' className='nav_link projects'>projects</Link>}
        {skills && <Link to='/skills' className='nav_link skills'>skills</Link>}
      </div>
    </div>
  )
}

/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

export function Navbar() {
  return (
    <div className='container nav_primary'>
      <div className='nav_secondary'>
        <span>About</span>
        <span>Projects</span>
        <span>Skills</span>
      </div>
    </div>
  )
}
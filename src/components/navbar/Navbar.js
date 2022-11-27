import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'
// import { Portfolio } from '../Portfolio'

export function Navbar() {
  return (
    <div className='container-fluid nav_primary'>
      <div className='nav_secondary'>
        <div className='nav_full_name'>
          <span className='fname_span'>Hanifa</span>
          <span className='lname_span'>Ahmadov</span>
        </div>

        <div className='nav_software_developer'>
          <span className='dev_span'>Software Developer</span>
        </div>

        <div className='nav_links'>
          <span>
            <Link to='/portfolio' className='portfolio'>
              Portfolio
            </Link>
          </span>
          <span>
            <Link to='/skills' className='skills'>
              Skills
            </Link>
          </span>
          <span>
            <Link to='/resume' className='resume'>
              Resume
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

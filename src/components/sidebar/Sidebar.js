import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.scss'

export function Sidebar() {
  return (
    <div className='container-md sidebar_primary'>
      <div className='sidebar_secondary'>
        <div className='sidebar_full_name'>
          <span className='fname_span'>Hanifa</span>
          <span className='lname_span'>Ahmadov</span>
        </div>

        <div className='sidebar_software_developer'>
          <span className='dev_span'>Software Developer</span>
        </div>

        <div className='sidebar_links'>
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
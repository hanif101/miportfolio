/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'


import { Trail } from '../animate/trail/Trail'

import './home.scss'

export function Home({ open }) {
  return (
    <div className='container home_primary'>
      <div className='home_secondary'>
        <Trail open={open}>
          <div>Hanifa</div>
          <div>Ahmadov</div>
          <div>Full</div>
          <div>Stack</div>
          <div>Developer</div>
        </Trail>
      </div>
    </div>
  )
}

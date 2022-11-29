/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

import { Trail } from '../animate/trail/Trail'
import { Navbar } from '../navbar/Navbar'

import { Animated_Icons } from '../animate/icons/Animated_Icons'
import { motion } from 'framer-motion/dist/framer-motion'
import './home.scss'

export function Home({ open }) {
  const navbar = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
  }



  return (
    <div className='home_primary'>
      <div className='container home_secondary'>
        <motion.div
          className='home_navbar_wrapper'
          variants={navbar}
          initial='initial'
          animate='animate'
        >
          <Navbar home={false} about={true} projects={true} skills={true} />
        </motion.div>

        <Trail open={open}>
          <div>Hanifa</div>
          <div>Ahmadov</div>
          <div>Full</div>
          <div>Stack</div>
          <div>Developer</div>
        </Trail>

        <div className='home_animated_icons_wrapper'>
          <Animated_Icons />
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import { motion } from 'framer-motion/dist/framer-motion'

import './animated_icons.scss'
import { icons } from './icons'
import { Bounce } from './Bounce'

export function Animated_Icons() {
  const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
  }
  
  return (
    <motion.div
      className='container animated_icons'
      variants={iconVariants}
      initial='hidden'
      animate='visible'
    >
      <Bounce icons={icons} />
    </motion.div>
  )
}

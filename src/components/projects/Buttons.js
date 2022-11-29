import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

import './buttons.scss'

export function Buttons({ demo_link, github_link }) {
  return (
    <div className='buttons_primary'>
      <div className='demo'>
        <motion.a
          whileHover={{
            scale: 1.03,
            backgroundColor: 'rgb(67, 16, 179)',
            color:'white',
            transition: {
              ease: 'easeInOut'
            }
          }}
          href={demo_link}
          target='_blank'
          className='btn p-1 px-3'
          type='button'
        >
          Demo
        </motion.a>
      </div>

      <div className='github'>
        <motion.a
          whileHover={{
            backgroundColor: 'rgb(67, 16, 179)',
            color:'white',
            scale: 1.03,
            transition: {
              ease: 'easeInOut'
            }
          }}
          href={github_link}
          target='_blank'
          className='btn p-1 px-3 mx-3'
          type='button'
        >
          Github
        </motion.a>
      </div>
    </div>
  )
}

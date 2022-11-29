/* eslint-disable */
import React from 'react'
import { Navbar } from '../navbar/Navbar'

import './about.scss'
import party from '../../images/party.ico'
import { Trail } from '../animate/trail/Trail'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

export function About() {
  const primary = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 5 } }
  }
  return (
      <motion.div
        className='container about_primary'
        variants={primary}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className='about_navbar'>
          <Navbar home={true} projects={true} skills={true} />
        </div>

        <div className='about_header'>About Me</div>
        <div className='about_text'>
          <p>
            Welcome to my engineering and development portfolio !
            <span>
              <img src={party} alt='ura' />
            </span>
          </p>
          <p>
            I graduated from Azerbaijan Technological University in back home country with a degree
            in Safety Engineering. Spending several years in education-related jobs I had a chance
            to come to USA. After acommodating in the USA and working at self-emploment jobs, I
            decided to change my career. I was in search my passion and I remembered I always had an
            interesting good at solving logical problems at university. One day I have met one of my
            friend in San Jose in 2020 who is in software developer field and he gave me general
            idea of how code works, algoritms run. I got so excited and I felt this is my passion
            and have to follow it.
          </p>

          <p>
            So, I enrolled General Assembly school in Boston and graduated from as a Software
            Developer in Feb 2022. During 12 weeks, 500 hours commitment in GA full-stack software
            immersive class, I have built 3 projects by getting proficiency in the most popular
            technologies. After graduation, I am focusing on new technologies and working on new
            projects for improvement. I do also have hobbies like walkig and reading books, watching
            movies in my spare time. Now I am happy that I have found my passion and open to any
            chance to dive in and get experience.
          </p>
        </div>
      </motion.div>
  )
}

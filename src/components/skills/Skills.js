/* eslint-disable */
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

import './skills.scss'
import { Navbar } from '../navbar/Navbar'
import {js, ts, py, react, heroku, css, express, mongodb, dj, jq, algo, socket, psql, node, bootstrap} from './logos'

export function Skills() {
  const primary = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  }
  return (

      <motion.div
        className='container skills_primary'
        variants={primary}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className='skills_navbar'>
          <Navbar home={true} projects={true} about={true} />
        </div>

        <div className='skills_header'>Skills</div>
        <div className='container skills_content'>
          <div className='container child1'>
            <p className='lang_text'>Languages</p>

            <div className='lang_wrapper'>
              <p className='advance'>Advanced :</p>
              <ul>
                <li> Javascript <span>{js}</span> & Typescript <span>{ts}</span></li>
              </ul>

              <p className='inter p'>Intermediate :</p>
              <ul>
                <li>Python <span>{py}</span> </li>
              </ul>
            </div>
          </div>

          <div className='container tech child2'>
            <p className='tech_frame_text'>Technologies & Frameworks</p>

            <div className='tech_frame_wrapper'>
              <p className='p' >Cloud computing:</p>
              <ul>
                <li>Heroku <span>{heroku}</span></li>
                <li>Cloud MongoDB  <span>{mongodb}</span> & Postgre database <span>{psql}</span></li>
              </ul>

              <p className='parent4'>APIs:</p>
              <ul>
                <li>Design & development</li>
                <li>App integration with 3rd party APIs</li>
              </ul>
            </div>
          </div>

          <div className='container child3' >
            <li>WebSockets <span>{socket}</span></li>
            <li>ReactJS <span>{react}</span></li>
            <li>Node.js <span>{node}</span> & Express <span>{express}</span></li>
            <li>Django <span>{dj}</span></li>
            <li>Bootstrap <span>{bootstrap}</span></li>
            <li>Jquery <span>{jq}</span></li>

            <li>CSS/SCSS <span>{css}</span></li>
            <li>Algorithms <span>{algo}</span></li>
          </div>
        </div>
      </motion.div>

  )
}

/* 








*/

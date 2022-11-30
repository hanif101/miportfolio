/* eslint-disable */
import React, { Fragment, useState } from 'react'
import { Route, Router, Switch, useHistory, useLocation } from 'react-router-dom'

import './app.scss'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const App = () => {
  const history = useHistory()
  const location = useLocation()

  const [open, setOpen] = useState(true)

  return (
    <AnimatePresence>
      <div className='app_primary'>
        <Router history={history} location={location} key={location.pathname}>
      
          <Route exact path='/'>
            <Home open={open}/>
          </Route>

          <Route exact path='/about'>
            <About/>
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/skills'>
            <Skills/>
          </Route>
          
        </Router>
      </div>
    </AnimatePresence>
  )
}

export default App

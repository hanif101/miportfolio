/* eslint-disable */
import React, { Fragment, useState } from 'react'
import { Route, Router, Switch, useHistory, useLocation } from 'react-router-dom'

import './app.scss'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const App = () => {
  const history = useHistory()
  const location = useLocation()

  const [open, setOpen] = useState(true)

  return (
    <AnimatePresence>
      <div className='app_primary'>
        <Router history={history} location={location} key={location.pathname}>
          <Route exact path='/' component={() => <Home open={open} />} />
          <Route exact path='/about' component={() => <About />} />
          <Route exact path='/projects'>
            <Projects />
          </Route>
        </Router>
      </div>
    </AnimatePresence>
  )
}

export default App

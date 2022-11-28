/* eslint-disable */
import React, { Fragment, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'

import './App.scss'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'

import { Animated_Icons } from './components/animate/icons/Animated_Icons'

const App = () => {
  const [open, setOpen] = useState(true)
  const history = useHistory()

  return (
    <div className='container-fluid app_primary'>
      <div className='app_navbar_wrapper'>
        <Navbar />
      </div>
      
      <div className='app_home_wrapper'>
        <Home open={open} />
        <Animated_Icons/>
      </div>
   
    </div>
  )
}

export default App

// <div className='body'>
//   {/* <Router history={history}>
//     <Route exact path='/' component={Home} />
//   </Router> */}
// </div>

// <div className='container' onClick={() => setOpen((state) => !state)}>
//   <Trail open={open}>
//     <span>Hanifa</span>
//     <span>Ahmadov</span>
//     <span>Full</span>
//     <span>Stack</span>
//     <span>Developer</span>
//   </Trail>
// </div>

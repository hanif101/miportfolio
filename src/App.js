import React, { Fragment } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Portfolio } from './components/Portfolio'
import { Sidebar } from './components/sidebar/Sidebar'

const App = () => {
  const history = useHistory()
  return (
    <Fragment>
      {/* <Route exact path='/' component={ Navbar } />
      <Route exact path='/portfolio' component={ Portfolio } /> */}
      <Navbar />
    </Fragment>
  )
}

export default App

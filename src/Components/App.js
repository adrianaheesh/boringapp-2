import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import FindActivity from './FindActivity'
import About from './About'
import { Body } from './styles'

const App = () => {
  return (
    <Body>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={FindActivity}/>
          <Route path="/About" component={About}/>
        </Switch>
      </Router>
    </Body>
  )
}

export default App

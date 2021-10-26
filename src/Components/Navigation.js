import React from 'react'
import { 
    Switch, 
    Route, 
    Link,
    BrowserRouter as Router
} from 'react-router-dom'
import About from './About'
import FindActivity from './FindActivity'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <Router>
                    <Link to="/about"> 
                        <li>About</li>
                    </Link>
                    <Link to="/"> 
                        <li>Activity Search</li>
                    </Link>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <FindActivity />
                        </Route>
                    </Switch>
                </Router>
            </ul>
        </nav>
    )
}

export default Navigation
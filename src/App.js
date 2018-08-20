import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SmartComponent from './SmartComponent'
import Users from './Users';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to={'/users'}>Users </Link>
            <Link to={'/smart'}>Smart </Link>
            <Link to={'/hello/world'}>World </Link>
            <Link to={'/hello'}>Hello </Link>
            <Switch>
              <Route path={'/users'} component={Users} />
              <Route path={'/smart'} component={SmartComponent} />
              <Route path={'/hello/world'} component={World} />
              <Route path={'/hello'} component={Hello} />
              <Route path={'/'} exact={true} component={Hello} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const Hello = function (props) {
  return <p>Hello</p>
}

const World = props => (
  <div>
    World
  </div>
)

export default App

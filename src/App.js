import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <Route path={'/'} exact={true} component={Hello} />

        </Router>
      </div>
    )
  }
}

const Hello = function (props) {
  return <p>Hello</p>
}

export default App

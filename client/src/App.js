import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import BeerInfo from './components/BeerInfo';
import NavBar from './components/NavBar';
import MyProvider from './components/MyProvider';


class App extends Component {


  render() {
    return (
      
        <div>
          <MyProvider>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/:userId' component={UserPage} />
            <Route exact path='/:userId/drinks/:drinkId' component={BeerInfo} />
          </Switch>
          </MyProvider>
        </div>
      
    );
  }
}

export default App;

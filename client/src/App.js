import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import BeerInfo from './components/BeerInfo';
import NavBar from './components/NavBar';
import MyProvider from './components/MyProvider';
import UserBeers from './components/UserBeers';




class App extends Component {
  
 


  render() {


    return (

      <div>
        <MyProvider>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/home' component={UserPage} /> */}
            <Route exact path='/beers' component={UserBeers} />
            <Route exact path='/beers/:beerId' component={BeerInfo} />
          </Switch>
        </MyProvider>
      </div>

    );
  }
}

export default App;

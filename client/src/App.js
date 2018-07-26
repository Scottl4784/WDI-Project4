import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import BeerInfo from './components/BeerInfo';
import NavBar from './components/NavBar';
import MyProvider, { MyContext } from './components/MyProvider';
import UserBeers from './components/UserBeers';
import SignUpLogIn from './components/SignUpLogIn';
import axios from 'axios'



class App extends Component {
  
 


  render() {


    return (

      <div>
        <MyProvider>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route exaxt path='/signUp' render={SignUpLogInComponent}/> */}
            <Route exact path='/home' component={UserPage} />
            <Route exact path='/beers' component={UserBeers} />
            <Route exact path='/:userId/beers/:beerId' component={BeerInfo} />
          </Switch>
          {/* {this.state.signedIn ? <Redirect to='/home'/> : <Redirect to="/signUp"/>} */}
        </MyProvider>
      </div>

    );
  }
}

export default App;

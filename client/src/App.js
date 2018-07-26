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
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil"



class App extends Component {
  
  state = {
    signedIn: false
}

async componentDidMount() {
  try {
      const signedIn = userIsLoggedIn()

      if (signedIn) {
          setAxiosDefaults()
  
      }
      this.setState({
          signedIn,
      })
  } catch(error) {
      console.log(error)
  }
}

signUp = async (email, password, password_confirmation) => {
  try {
      const payload = {
          email: email,
          password: password,
          password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      this.setState({
          signedIn: true,
      })

  } catch (error) {
      console.log(error)
  }
}

signIn = async (email, password) => {
  try {
      const payload = {
          email,
          password
      }
      console.log('about to call')
      const response = await axios.post('/auth/sign_in', payload)
      console.log('CALLED!')
      saveAuthTokens(response.headers)
      
      console.log('userinfo', response)
      this.setState({
          signedIn: true
      })

  } catch (error) {
      console.log(error)
  }
}


  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn
          signUp={this.signUp}
          signIn={this.signIn} />
  )

    return (

      <div>
        <MyProvider>
          <NavBar />
          <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route exaxt path='/signUp' render={SignUpLogInComponent}/>
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

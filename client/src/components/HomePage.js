import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SignUpLogIn from './SignUpLogIn';
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "../util/SessionHeaderUtil"


class HomePage extends Component {
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

        const SignUpLogInComponent = 
            <SignUpLogIn
                signUp={this.signUp}
                signIn={this.signIn} />
        

        return (
            <div>
                
                {this.state.signedIn ? <Redirect to='/home'/> : <div>{SignUpLogInComponent}</div>}
            </div>
        )
    }
}


export default HomePage;
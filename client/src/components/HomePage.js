import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import SignUpLogIn from './SignUpLogIn';

class HomePage extends Component {
    state = {
        signedIn: false
    }

    signUp = async (email, password, password_confirmation) => {
        try {
            const payload = {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            await axios.post('/auth', payload)

            this.setState({ signedIn: true })

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
            await axios.post('/auth/sign_in', payload)

            this.setState({ signedIn: true })

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
                {SignUpLogInComponent}
                {this.state.signedIn ? null : <Redirect to="/signUp" />}
            </div>
        )
    }
}


export default HomePage;
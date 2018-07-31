import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import {saveAuthTokens, setAxiosDefaults} from "../util/SessionHeaderUtil"
import { Form, Button } from 'semantic-ui-react'

class UserSettings extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        user: {}
    }

    getUser() {
        setAxiosDefaults()
        axios.get('/api/users/user').then((res) => {
            this.setState({ user: res.data })
        })
    }

    changeEmail = async () => {
        try {
            const payload = {
                email: this.state.email
            }
            setAxiosDefaults()
            const response = await axios.put('/auth', payload)
            saveAuthTokens(response.headers)      
        }
         catch (error) {
            console.log(error)
        }
      }
    changeName = async () => {
        try {
            const payload = {
                name: this.state.name,
            }
            setAxiosDefaults()
            const response = await axios.put('/api/users/user', payload)     
        }
         catch (error) {
            console.log(error)
        }
      }
    changePassword = async () => {
        try {
            const payload = {
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
            setAxiosDefaults()
            const response = await axios.put('/auth/password', payload)
            saveAuthTokens(response.headers)      
        }
         catch (error) {
            console.log(error)
        }
      }

      handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
        console.log(this.state)
    }

    componentDidMount () {
        this.getUser()
    }

    changeSettings = () => {
        this.changeEmail()
        this.changeName()
        this.changePassword()
    }


    render() {
        return (
            <div>
                <NavBar />
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='Name'  placeholder={this.state.user.name} name='name' value={this.state.name} onChange={this.handleChange} />
                        <Form.Input label='Email'  placeholder={this.state.user.email} name='email' value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Password' placeholder='Password' name='password' type='password' onChange={this.handleChange} />
                        <Form.Input label='Confirm Password' placeholder='Confirm Password' name='password_confirmation' type='password' onChange={this.handleChange} />
                    </Form.Group>
                    <Button type='submit' onClick={this.changeSettings}>Submit</Button>
                </Form>

            </div>
        );
    }
}

export default UserSettings;
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
    }

    getUser() {
        setAxiosDefaults()
        axios.get('/api/users/user').then((res) => {
            console.log(res.data)
            this.setState({ user: res.data })
        })
    }
    changeSettings = async (name, email, password, password_confirmation) => {
        try {
            const payload = {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            const response = await axios.put('/auth', payload)
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
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        return (
            <div>
                <NavBar />
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='Name' placeholder='Name' />
                        <Form.Input label='Email' placeholder='Email' />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Password' placeholder='Password' />
                        <Form.Input label='Confirm Password' placeholder='Confirm Password' />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>

            </div>
        );
    }
}

export default UserSettings;
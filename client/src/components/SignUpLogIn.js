import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        toggleSignUp: false
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    toggleSignUp = () => {
        const toggleSignUp = !this.state.toggleSignUp  
        this.setState({toggleSignUp})
    }

    render() {
        return (
                <div className='login-form'>
            
                <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                  <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                      <Image src='/logo.png' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                      <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleChange} name="email"/>
                        <Form.Input
                          fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          onChange={this.handleChange}
                          name="password"
                          type='password'
                        />
            
                        <Button color='teal' fluid size='large' onClick={this.signIn}>
                          Login
                        </Button>
                      </Segment>
                    </Form>
                    <Message>
                      New to us? <a onClick={this.signUp}>Sign Up</a>
                    </Message>
                  </Grid.Column>
                </Grid>

              </div>                    
        )
    }
}

export default SignUpLogIn
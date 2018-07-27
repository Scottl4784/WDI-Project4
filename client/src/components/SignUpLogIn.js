import React, { Component } from 'react'

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
            <div>
                {this.state.toggleSignUp ? 
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                            value={this.state.password_confirmation} />
                    </div>                    
                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.toggleSignUp}>Cancel</button>
                </form>
                :
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                    </div>
                    <button onClick={this.toggleSignUp}>Sign Up</button>
                    <button onClick={this.signIn}>LogIn</button>
                </form>
                }
            </div>
        )
    }
}

export default SignUpLogIn
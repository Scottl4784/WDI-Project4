import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

export const MyContext = React.createContext()

class MyProvider extends Component {

    state = {
        user: []
    }

    getUser = (userId) => {
        axios.get(`/api/users/${userId}`).then((res) => {
            this.setState({ user: res.data })
        })
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                getUser: this.getUser
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default withRouter(MyProvider);
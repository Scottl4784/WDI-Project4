import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';

export const MyContext = React.createContext()

class MyProvider extends Component {

    state = {
        user: []
    }

    getUser = (userId) => {
        setAxiosDefaults()
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
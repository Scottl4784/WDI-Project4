import React, { Component } from 'react'
import axios from 'axios'

const MyContext = React.createContext()

class MyProvider extends Component {

    state = {
        user: []
    }

    getUser () {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            this.setState({user: res.data})
        })
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
            }}>
            {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;
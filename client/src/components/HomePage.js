import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class HomePage extends Component {
    state = {
        users: []
    }
    getUsers() {
        axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
        })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const usersList = this.state.users.map((user) => {
            return (
                <div key={user.id}>
                    <img src={user.picture} alt="" />
                    <Link to={`/${user.id}`}>
                    <h1>{user.name}</h1>
                    </Link>
                </div>
            )
        })

        return (
            <div>
                {usersList}
            </div>
        );
    }
}

export default HomePage;
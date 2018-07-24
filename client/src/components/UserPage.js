import React, { Component } from 'react'
import BeerSearch from './BeerSearch'
import Beers from './Beers'
import axios from 'axios'

class UserPage extends Component {
    state = {
        user: []
    }

    getUser () {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            this.setState({ user: res.data })
        })
    }
    componentDidMount () {
        this.getUser()
    }

    render() {
        return (
            <div>
                {this.state.user.name}
                <BeerSearch {...this.props} />
                <Beers {...this.props} />
            </div>
        );
    }
}

export default UserPage;
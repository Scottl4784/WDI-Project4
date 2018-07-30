import React, { Component } from 'react'
import NavBar from './NavBar'
import UserBeers from './UserBeers';




class UserPage extends Component {
 

    render() {

        return (
            <div>
                <NavBar/>
                <UserBeers {...this.props}/>
            </div>
        );
    }
}

export default UserPage;
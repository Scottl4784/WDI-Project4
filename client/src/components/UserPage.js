import React, { Component } from 'react'
import BeerSearch from './BeerSearch'



class UserPage extends Component {
 

    render() {

        return (
            <div>

                <BeerSearch {...this.props}/>

            </div>
        );
    }
}

export default UserPage;
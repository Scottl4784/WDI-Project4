import React, { Component } from 'react'
import BeerSearch from './BeerSearch'
import Beers from './Beers'
import { MyContext } from './MyProvider'


class UserPage extends Component {
 

    render() {
        const userId = this.props.match.params.userId
        return (
            <div>
                <MyContext.Consumer>
                    {context => {
                        if (!context.state.user.length) {
                            context.getUser(userId)
                        }
                        return (
                            <React.Fragment>
                                <h1>Hello </h1>
                                <h1>{context.state.user.name}</h1>
                            </React.Fragment>
                        )
                    }
                }

                </MyContext.Consumer>

                {/* {this.state.user.name}
                <BeerSearch {...this.props}/>
                <Beers {...this.props}/> */}
            </div>
        );
    }
}

export default UserPage;
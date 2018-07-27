import React, { Component } from 'react'
import BeerSearch from './BeerSearch'



class UserPage extends Component {
 

    render() {

        return (
            <div>
                {/* <MyContext.Consumer>
                    {context => {
                        if (context.state.user.length === 0) {
                            context.getUser(userId)
                        }
                        return (
                            <React.Fragment>
                                <h1>Hello </h1>
                                <h1>{context.state.user.email}</h1>
                            </React.Fragment>
                        )
                    }
                }

                </MyContext.Consumer> */}

                <BeerSearch {...this.props}/>

            </div>
        );
    }
}

export default UserPage;
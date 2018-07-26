import React, { Component } from 'react'
import axios from 'axios'
import EachBeer from './EachBeer';

class UserBeers extends Component {
    state = {
        beers: []
    }

    getBeerIds() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/drinks`).then((res) => {
            console.log(res.data)
            this.setState({ beers: res.data })
        })
    }

    componentDidMount() {
        this.getBeerIds()
    }


    render() {

        const beersList = this.state.beers.map((beer) => {
            return (
                <div key={beer.id}>
                    <EachBeer beerId={beer.beer_id} />
                </div>
            )
        })

        return (
            <div>
                {beersList}
            </div>
        );
    }
}

export default UserBeers;
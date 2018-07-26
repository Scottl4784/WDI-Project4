import React, { Component } from 'react'
import axios from 'axios'
import EachBeer from './EachBeer';
import { setAxiosDefaults } from '../util/SessionHeaderUtil'

class UserBeers extends Component {
    state = {
        beers: []
    }

    getBeerIds = () => {
        setAxiosDefaults()
        axios.get(`/api/users/user/drinks`).then((res) => {
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
import React, { Component } from 'react'
import axios from 'axios'
import EachBeer from './EachBeer';

class Beers extends Component {
    state = {
        beers: []
    }

    getBeerIds () {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/drinks`).then((res) => {
            console.log(res.data)
            this.setState({beers: res.data})
        })
    }

    componentDidMount () {
        this.getBeerIds()
    }


    render() {

        const beersList = this.state.beers.map((beer) => {
            return (
    
                <EachBeer beerId={beer.beer_id} key={beer.id}/>
            )
        })

        return (
            <div>
            {beersList}
            </div>
        );
    }
}

export default Beers;
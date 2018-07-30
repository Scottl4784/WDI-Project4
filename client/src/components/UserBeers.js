import React, { Component } from 'react'
import axios from 'axios'
import EachBeer from './EachBeer';
import { setAxiosDefaults } from '../util/SessionHeaderUtil'
import { Card } from 'semantic-ui-react'



class UserBeers extends Component {
    state = {
        beers: []
    }

    getBeerIds = () => {
        setAxiosDefaults()
        axios.get(`/api/users/user/drinks`).then((res) => {
            this.setState({ beers: res.data })
        })
    }

    componentDidMount() {
        this.getBeerIds()
    }
    
    deleteBeer = (beerId) => {
        setAxiosDefaults()
        axios.delete(`/api/users/user/drinks/${beerId}`).then((res) => {
            console.log(res.data)
            this.setState({beers: res.data})
        })
        
    }

    render() {

        const beersList = this.state.beers.map((beer) => {
            return (
                <div key={beer.id}>
                    <EachBeer apiBeerId={beer.beer_id} userBeerId={beer.id} deleteBeer={this.deleteBeer}/>
                </div>
            )
        })

        return (
            <div>
                <Card.Group>
                    {beersList}
                </Card.Group>
            </div>
        );
    }
}

export default UserBeers;
import React, { Component } from 'react'
import axios from 'axios'
import EachBeer from './EachBeer';
import { setAxiosDefaults } from '../util/SessionHeaderUtil'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 5em 0 0 0;
`



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
            <Container>
                <Card.Group>
                    {beersList}
                </Card.Group>
            </Container>
        );
    }
}

export default UserBeers;
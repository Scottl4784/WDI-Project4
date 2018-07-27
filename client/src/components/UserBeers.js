import React, { Component } from 'react'
import axios from 'axios'
import EachBeer from './EachBeer';
import { setAxiosDefaults } from '../util/SessionHeaderUtil'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex
`

const ListOfBeers = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
    img {
        width: 50px;
        height: 100px;
    }
`
const IndividualBeer = styled.div`
    margin: 5%;
    width: 200px;
    display: flex;
    flex-direction: column;
    button {
        background-color: #981717;
        border: none;
        color: white;
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


    render() {

        const beersList = this.state.beers.map((beer) => {
            return (
                <IndividualBeer key={beer.id}>
                    <EachBeer apiBeerId={beer.beer_id} userBeerId={beer.id} />
                </IndividualBeer>
            )
        })

        return (
            <Container>
                <ListOfBeers>
                {beersList}
                </ListOfBeers>
            </Container>
        );
    }
}

export default UserBeers;
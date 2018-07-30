import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
`
const Picture = styled.div`
    margin: 25px;
    img {
        width: 15vw;
        height: 45vh;
    }
`
const Beer = styled.div`
    background-color: #000000bf;
    margin: 50px;
    padding: 25px;
    color: white;
`

class BeerInfo extends Component {
    state = {
        beer: {
            food_pairing: []
        }
    }

    getBeer() {
        const beerId = this.props.match.params.beerId
        axios.get(`https://api.punkapi.com/v2/beers/${beerId}`).then((res) => {
            this.setState({ beer: res.data[0] })
        })
    }
    componentDidMount() {
        this.getBeer()
    }
    render() {

        const foodPairing = this.state.beer.food_pairing.map((pairing, i) => {
            return (
                <div key={i}>
                    <p>
                    - {pairing}
                    </p>
                </div>
            )
        })
        return (
            <div>
                <NavBar />
                <Container>
                    <Beer>
                        <h1>{this.state.beer.name}</h1>
                        <p>Description: <br />{this.state.beer.description}</p>
                        <p>ABV: {this.state.beer.abv}</p>
                        <br/>
                        <p>Pairs Well with:</p>
                        {foodPairing}
                        
                    </Beer>
                    <Picture>
                        <img src={this.state.beer.image_url} alt="" />
                    </Picture>
                </Container>
            </div>
        );
    }
}

export default BeerInfo;
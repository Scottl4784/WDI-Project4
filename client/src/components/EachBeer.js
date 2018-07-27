import React, { Component } from 'react'
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';

class EachBeer extends Component {

    state = {
        beer: []
    }

    getBeer() {
        axios.get(`https://api.punkapi.com/v2/beers/${this.props.apiBeerId}`).then((res) => {
            this.setState({ beer: res.data[0] })
        })
    }

    addToFavorites = (beerId) => {
        setAxiosDefaults()
        axios.put(`/api/users/user/drinks/${beerId}`, {favorite: true} )
    }

    componentDidMount() {
        this.getBeer()
    }
    render() {
        return (
            <div>
            <h3>{this.state.beer.name}</h3>
            <img src={this.state.beer.image_url} width={100} height={175} alt=""/>
            <button onClick={() => this.addToFavorites(this.props.userBeerId)}>Favorite</button>
            </div>
        );
    }
}

export default EachBeer;
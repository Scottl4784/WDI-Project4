import React, { Component } from 'react'
import axios from 'axios'

class EachBeer extends Component {

    state = {
        beer: []
    }

    getBeer() {
        axios.get(`https://api.punkapi.com/v2/beers/${this.props.beerId}`).then((res) => {
            this.setState({ beer: res.data[0] })
        })
    }

    componentDidMount() {
        this.getBeer()
    }
    render() {
        return (
            <div>
            <h3>{this.state.beer.name}</h3>
            <img src={this.state.beer.image_url} width={100} height={175} alt=""/>
            </div>
        );
    }
}

export default EachBeer;
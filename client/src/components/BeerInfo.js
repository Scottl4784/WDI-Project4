import React, { Component } from 'react';
import axios from 'axios'
import { Card, Image, Item } from 'semantic-ui-react'
import NavBar from './NavBar';

class BeerInfo extends Component {
    state = {
        beer: []
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
        return (
            <div>
            <NavBar/>
            <Item>
            <Item.Image size='mini' src={this.state.beer.image_url} />
      
            <Item.Content>
              <Item.Header as='a'>{this.state.beer.name}</Item.Header>
              <Item.Description>
                <p>{this.state.beer.description}</p>
              </Item.Description>
            </Item.Content>
          </Item>
          </div>
        );
    }
}

export default BeerInfo;
import React, { Component } from 'react'
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';
import { Button, Card, Image } from 'semantic-ui-react'


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
        axios.put(`/api/users/user/drinks/${beerId}`, { favorite: true })
    }

    componentDidMount() {
        this.getBeer()
    }
    render() {
        return (

            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={this.state.beer.image_url} />
                    <Card.Header>{this.state.beer.name}</Card.Header>
                    <Card.Description>
                        {this.state.beer.tagline}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Add to Favorites
          </Button>
                    </div>
                </Card.Content>
            </Card>

        );
    }
}

export default EachBeer;
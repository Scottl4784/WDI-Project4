import React, { Component } from 'react'
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
    .ui.card {
        height: 325px;
    }
    .ui.card>.extra, .ui.cards>.card>.extra {
        text-align: right;
    }
`


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
        this.props.history.push('/favorites')
    }

    componentDidMount() {
        this.getBeer()
    }
    render() {
        return (
            <Container>
                <Card>
                    <Card.Content extra>
                        <Icon name='star' floated='right' size='large' onClick={() => this.addToFavorites(this.props.userBeerId)} />
                    </Card.Content>
                    <Card.Content>
                        <Image floated='right' size='mini' src={this.state.beer.image_url} />
                        <Card.Header>{this.state.beer.name}</Card.Header>
                        <Card.Description>
                            {this.state.beer.tagline}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' as={Link} to={`/beers/${this.props.userBeerId}`}>
                               More Info
                        </Button>
                            <Button basic color='red' onClick={() => this.props.deleteBeer(this.props.userBeerId)}>
                                Remove Beer
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Container>
        );
    }
}

export default EachBeer;
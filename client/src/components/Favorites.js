import React, { Component } from 'react';
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';
import { Card, Image } from 'semantic-ui-react'
import NavBar from './NavBar'



class Favorites extends Component {
    state = {
        favorites: []
    }

    getUserFavorites() {
        setAxiosDefaults()
        axios.get('/api/users/user/drinks').then((res) => {
            res.data.forEach((res) => {
                if (res.favorite) {
                    axios.get(`https://api.punkapi.com/v2/beers/${res.beer_id}`).then((res) => {
                        const favoritesArray = [...this.state.favorites, ...res.data]
                        this.setState({ favorites: favoritesArray })
                    })
                }
            })
        })
    }

    componentDidMount() {
        this.getUserFavorites()
    }
    render() {
        const favoritesList = this.state.favorites.map((favorite) => {
            return (
                
                <Card key={favorite.id}>
                    <Card.Content>
                        <Image floated='left' size='mini' src={favorite.image_url} />
                        <Card.Header>{favorite.name}</Card.Header>
                        <Card.Description>
                            {favorite.tagline}
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        })
        return (
            <div>
            <NavBar/>
            <h1>Liked it!</h1>
            <Card.Group>
                {favoritesList}
            </Card.Group>
            </div>
        );
    }
}

export default Favorites;
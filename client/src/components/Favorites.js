import React, { Component } from 'react';
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';



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
                <div key={favorite.id}>
                    {favorite.name}
                </div>
            )
        })
        return (
            <div>
                {favoritesList}
            </div>
        );
    }
}

export default Favorites;
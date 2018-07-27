import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';

const Container = styled.div`
display: flex;
flex-direction: row;
`
const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 25px 0;
    button {
        margin: 5px;
        height: 30px;
        width: 60px;
        border-radius: 5px;
        background: #eceae4;
    }
    input {
        margin: 5px;
        height: 25px;
        width: 150px;
        border-radius: 2px;
        border: 2px solid darkgray;
    }
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
const EachBeer = styled.div`
    margin: 5%;
    width: 200px;
    display: flex;
    flex-direction: column;
    button {
        background-color: #981717;
        border: none;
        color: white;
`

class BeerSearch extends Component {
    state = {
        search: [],
        searchResults: [],
    }

    handleChange = (event) => {
        const userInput = event.target.value
        this.setState({
            search: userInput
        })
    }
    handleSubmit = (beerId) => {
        setAxiosDefaults()
        axios.post('/api/users/user/drinks', { beer_id: beerId }).then(() => {
            // this.resetState()
            this.props.history.push('/beers')
        })
            .catch((err) => {
                console.log(err)
            })
    }
    handleSearch = () => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.search}`)
            .then((res) => {
                const newSearchResults = [...this.state.searchResults, ...res.data]
                console.log(res.data)
                this.setState({ searchResults: newSearchResults })
            })
    }
    resetState = () => {
        const resetState = { ...this.state }
        resetState.search = []
        resetState.searchResults = []
        this.setState(resetState)
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearch()
            this.resetState()
        }
    }
    render() {
        const resultsList = this.state.searchResults.map((result, i) => {
            return (
                <EachBeer key={i}>
                    <h3>{result.name}</h3>
                    <img onClick={() => this.handleSubmit(result.id)} src={result.image_url} alt="" />
                    <p>{result.tagline}</p>
                </EachBeer>
            )
        })
        return (
            <div>
                <SearchBar>
                    <input
                        value={this.state.search}
                        placeholder="Search for a beer"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.handleSearch}>Search</button>
                </SearchBar>
                <Container>
                    <ListOfBeers>

                        {resultsList}

                    </ListOfBeers>
                </Container>
            </div>
        );
    }
}

export default BeerSearch;
import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';

const Container = styled.div`
float: right;
display: flex;
flex-direction: column;
border-style: solid;
padding: 20px;
align-items: center;
height: 400px;
width: 200px;
margin: 20px;
background-color: #000000b8;
border: none;
color: white;
img {
    width: 100px;
    height: 150px;
}
`
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 25px 0
    button {
        margin: 5px;
        height: 30px;
        width: 60px;
        border-radius: 5px;
        background: #eceae4;
    }
    input {
        margin: 5px;
        border-radius: 5px;
        border: none;
        height: 25px;
        width: 150px;
        text-align: center;
    }
`
const SearchResults = styled.div`
    display: flex;
    flex-direction: column;
    button {
        background: #333f4b;
        border-style: none;
    }
    
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
        axios.post(`/api/users/user/drinks`, {beer_id: beerId}).then(() => {
            this.resetState()
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
                <div key={i}>
                    <h3>{result.name}</h3>
                    <img onClick={() => this.handleSubmit(result.id)} src={result.image_url} width={100} height={200} alt=""/>
                    <p>{result.tagline}</p>
                </div>
            )
        })
        return (
            <Container>
                <SearchBar>
                <input
                        value={this.state.search}
                        placeholder="Search for a beer"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    </SearchBar>
                    <SearchResults>
                        {resultsList}
                    </SearchResults>
            </Container>
        );
    }
}

export default BeerSearch;
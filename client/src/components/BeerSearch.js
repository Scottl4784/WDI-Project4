import React, { Component } from 'react';
import axios from 'axios'
import { setAxiosDefaults } from '../util/SessionHeaderUtil';
import { Button, Card, Image, Input } from 'semantic-ui-react'
import NavBar from './NavBar'
import styled from 'styled-components'

const SearchBar = styled.div`
    text-align: center;
    margin: 3vh 0 3vh 0;
    .ui.input {
        width: 35vw;
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
        axios.post('/api/users/user/drinks', { beer_id: beerId }).then(() => {
            this.resetState()
            this.props.history.push('/home')
        })
            .catch((err) => {
                console.log(err)
            })
    }
    handleSearch = () => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.search}`)
            .then((res) => {
                const newSearchResults = [...this.state.searchResults, ...res.data]
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
                <Card key={result.id}>
                    <Card.Content>
                        <Image floated='right' size='mini' src={result.image_url} />
                        <Card.Header>{result.name}</Card.Header>
                        <Card.Description>
                            {result.tagline}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={() => this.handleSubmit(result.id)}>
                                Tried it!
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            )
        })
        return (
            <div>
                <NavBar/>
                <h1>Add to your collection</h1>
                <SearchBar>
                <Input>
                    <input 
                    value={this.state.search}
                    placeholder="Search for a beer"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <Button primary onClick={this.handleSearch}>Search</Button>
                </Input>
                </SearchBar>
                <Card.Group>
                    {resultsList}
                </Card.Group>
            </div>
        );
    }
}

export default BeerSearch;
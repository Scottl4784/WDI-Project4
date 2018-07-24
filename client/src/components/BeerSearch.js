import React, { Component } from 'react';
import axios from 'axios'

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
    handleSubmit = (i) => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}`, this.state.searchResults[i]).then((res) => {
            this.props.newDrink(res.data)
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
                    <img onClick={() => this.handleSubmit(i)} src={result.image_url} width={100} height={200} alt=""/>
                    <p>{result.tagline}</p>
                </div>
            )
        })
        return (
            <div>
                <div>
                <input
                        value={this.state.search}
                        placeholder="Search for a beer"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    </div>
                    <div>
                        {resultsList}
                    </div>
            </div>
        );
    }
}

export default BeerSearch;
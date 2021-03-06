import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import BeerInfo from './components/BeerInfo';
import Favorites from './components/Favorites';
import UserPage from './components/UserPage';
import styled from 'styled-components'
import BeerSearch from './components/BeerSearch';
import UserSettings from './components/UserSettings';

const Container = styled.div`
    width: 80%;
    position: absolute;
    background-size: cover;
    margin: 0 10%;
`




class App extends Component {

    render() {
        return (
            <Router>
                <Container>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/home' component={UserPage} />
                    <Route exact path='/beers' component={BeerSearch} />
                    <Route exact path='/favorites' component={Favorites} />
                    <Route exact path='/account' component={UserSettings} />
                    <Route exact path='/beers/:beerId' component={BeerInfo} />
                </Switch>
            </Container>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import BeerInfo from './components/BeerInfo';
import NavBar from './components/NavBar';
import UserBeers from './components/UserBeers';
import Favorites from './components/Favorites';




class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/beers' component={UserBeers} />
                    <Route exact path='/favorites' component={Favorites} />
                    <Route exact path='/beers/:beerId' component={BeerInfo} />
                </Switch>
            </div>
        );
    }
}

export default App;

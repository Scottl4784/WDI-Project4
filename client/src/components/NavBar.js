import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { clearAuthTokens } from "../util/SessionHeaderUtil"
import axios from 'axios'
import { Menu } from 'semantic-ui-react';

const Container = styled.div`
margin: 3vh 0 0 0;
    .ui.menu {
        background: #03a87c;
        height: 7vh;
    }

`


class Navbar extends Component {
    state = {
        signedIn: ''
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    signOut = async () => {
        await axios.delete('/auth/sign_out')
        clearAuthTokens()
        this.setState({ signedIn: false })
        this.props.history.push('/')
    }

    render() {

        const { activeItem } = this.state

        return (
            <Container>
            <Menu>
                    <Menu.Item name='home' as={Link} to='/home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                    <Menu.Item name='beers' as={Link} to='/beers' active={activeItem === 'beers'} onClick={this.handleItemClick}>
                        Find a Beer
                    </Menu.Item>
                    < Menu.Item name='favorites' as={Link} to='/favorites' active={activeItem === 'favorites'} onClick={this.handleItemClick}>
                        Favorites
                    </Menu.Item>
                    <Menu.Menu position='right'>
                    < Menu.Item name='signout' onClick={this.signOut}>
                        Sign Out
                    </Menu.Item>
                    </Menu.Menu>
            </Menu>
            </Container>
        );
    }
}

export default withRouter(Navbar)
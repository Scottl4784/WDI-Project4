import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { clearAuthTokens } from "../util/SessionHeaderUtil"
import axios from 'axios'


const Container = styled.div`
    height: 5rem;
    background: #6b6b6b;
    margin: 25px;
    display: flex;
    justify-content: space-between;
    background-color: black;
    border-radius: 15px;
`
const Logo = styled.div`
    border-right-style: solid
    padding: 2rem 1rem;
    color: #bdaf31cc;
`
const HomeButton = styled.div`
    padding: 2rem 1rem 0 0;
    color: #bdaf31cc;
`

class Navbar extends Component {
    state = {
        signedIn: '',
        redirect: ''
    }


    signOut = async () => {
        await axios.delete('/auth/sign_out')
        clearAuthTokens()
        this.setState({ signedIn: false })
    }

    render() {
        return (
            <Container>
                <Logo>
                    <Link to='/beers'>Beers</Link>
                    <Link to='/favorites'>Favorites</Link>
                </Logo>
                <HomeButton>
                    <Link to='/'>Home</Link>
                    <Link to='/'><button onClick={() => this.signOut()}>Sign Out</button></Link>
                </HomeButton>
            </Container>

        );
    }
}

export default Navbar;
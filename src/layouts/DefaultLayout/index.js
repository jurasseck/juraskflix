import React, { Component } from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`

const DefaultLayout = class DefaultLayout extends Component {
    
    render() {
        return (
            <>
                <Menu/>
                <Main>
                    {this.props.children}
                </Main>
                <Footer/>
            </>
        )
    }
}

export default DefaultLayout
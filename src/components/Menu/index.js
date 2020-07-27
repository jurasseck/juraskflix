import React, { Component } from 'react'
import './styles.css'
import Logo from '../../assets/img/Logo.png'
import ButtonLink from '../ButtonLink'

const Menu = class Menu extends Component {

    render() {
        return (
            <nav className="Menu">
                <img src={Logo} alt="Logo da porra toda" className="Logo" />
                <ButtonLink className="ButtonLink" href="/">
                    Novo vídeo
                </ButtonLink>
            </nav>
        )
    }
}

export default Menu
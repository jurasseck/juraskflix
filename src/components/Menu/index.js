import React, { Component } from 'react'
import './styles.css'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Menu = class Menu extends Component {

    render() {
        return (
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo} alt="Logo da porra toda" className="Logo" />
                </Link>
                <Button as={Link} to="/cadastro/video">
                    Novo vídeo
                </Button>
            </nav>
        )
    }
}

export default Menu
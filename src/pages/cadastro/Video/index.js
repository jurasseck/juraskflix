import React, { Component } from 'react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Link } from 'react-router-dom'

const Video = class Video extends Component {

    render() {
        return (
            <DefaultLayout>
                <h1>Cadastro de Vídeo</h1>
                <Link to="/cadastro/categoria">
                    Cadastro de Categoria
                </Link>
            </DefaultLayout>
        )
    }
}

export default Video
import React, { Component } from 'react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Link } from 'react-router-dom'

const Categoria = class Categoria extends Component {

    render() {
        return (
            <DefaultLayout>
                <h1>Cadastro categoria</h1>
                <form>
                    <label>
                        Nome
                        <input type="text"/>
                    </label>
                    <button>Cadastrar</button>
                </form>
                <Link to="/">Ir para Home</Link>
            </DefaultLayout>
        )
    }
}

export default Categoria
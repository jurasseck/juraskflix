import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import DefaultLayout from '../../../layouts/DefaultLayout'
import FormField from '../../../components/FormField'

function Categoria() {

    const value = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(value)

    function handleSubmit(e) {
        e.preventDefault()
        setCategorias([...categorias, values])
        setValues(value)
    }

    function setValue(k, v) {
        setValues({
            ...values,
            [k]:v
        })
    }

    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    return (
        <DefaultLayout>
            <h1>Cadastro categoria {values.nome}</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormField
                    label='Nome da categoria'
                    name='nome'
                    type='text'
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField
                    textarea
                    label='Descrição da categoria'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label='Cor da categoria'
                    name='cor'
                    type='color'
                    value={values.cor}
                    onChange={handleChange}
                />
                <button>Cadastrar</button>
            </form> 
            <ul>
                {categorias.map((categoria, index) => (<li key={index}>{categoria.nome}</li>))}
            </ul>
            <Link to="/">Ir para Home</Link>
        </DefaultLayout>
    )
}

export default Categoria
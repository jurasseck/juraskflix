import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../../../layouts/DefaultLayout';
import FormField from '../../../components/FormField';

function Categoria() {
  const value = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(value);
  const URL = !window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://devsoutinhoflix.herokuapp.com/categorias';

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(value);
  }

  function setValue(k, v) {
    setValues({
      ...values,
      [k]: v,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    async function getCategorias() {
      const response = await fetch(URL);
      const data = await response.json();
      setCategorias([...data]);
    }
    getCategorias();
  }, []);

  return (
    <DefaultLayout>
      <h1>
        Cadastro categoria
        {values.nome}
      </h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          type="textarea"
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => (<li key={index}>{categoria.titulo}</li>))}
      </ul>
      <Link to="/">Ir para Home</Link>
      {categorias.length === 0 && (
        <div>Loading...</div>
      )}
    </DefaultLayout>
  );
}

export default Categoria;

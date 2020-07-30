import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../../layouts/DefaultLayout';

function Video() {
  return (
    <DefaultLayout>
      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>
    </DefaultLayout>
  );
}

export default Video;

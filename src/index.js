import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import Home from './pages/Home'
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={Video} />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={() => (<div>Página não encontrada</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
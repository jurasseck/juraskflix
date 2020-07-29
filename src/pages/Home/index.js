import React, { Component} from 'react';

import DefaultLayout from '../../layouts/DefaultLayout'

import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import dadosIniciais from '../../data/dados_iniciais.json'

const Home = class App extends Component {
    render() {
        return (<div style={{background: '#141414'}}>
        <DefaultLayout>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="LOREM"
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        />
        </DefaultLayout>
      </div>)
    }
}

export default Home;
import React from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import Routes from './src/routes'
//react noa tem tags 
//view usado para qualquer tipo de container
//text usada para qualquer tipo de texto
//valores que nao sao numeros colocar aspas simples
//nao existe herança de estilo no react native 
//passar direto no componente


export default function App() {
  return (
    <Routes/>
  );
}



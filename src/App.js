import React from 'react';
import './App.css';

import Card from './conponents/layout/Card';
import AvaliacaoLista from './conponents/avaliacao/AvaliacaoLista';

const filmes = [
  {
    "id": "1",
    "titulo": "Avengers Infinity War",
    "sinopse": "Os heróis enfrentam Thanos",
    "produtores": "Irmãos Russo",
    "protagonistas": "Robert Downey Jr., Chris Evans"
  },
  {
    "id": "2",
    "titulo": "Avengers Ultimate",
    "sinopse": "A derrota de Thanos",
    "produtores": "Irmãos Russo",
    "protagonistas": "Mark Ruffalo, Elisabeth Olsen"
  }
];

const App = () => {
  return (
    <div className="App">
      { 
        filmes.map(f => {
          return (
            <Card key={f.id} filme={f}>
              <span>Teste</span>
            </Card>
          );
        }) 
      }
      {/* <AvaliacaoLista  /> */}
    </div>
  );
}

export default App;

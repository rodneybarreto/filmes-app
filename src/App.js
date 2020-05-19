import React from 'react';

import './App.css';
import FilmeLista from './conponents/filme/FilmeLista';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FilmeLista />
        {/* <AvaliacaoLista  /> */}
      </div>
    );
  }
}

export default App;

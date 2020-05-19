import React from 'react';

import './App.css';
import FilmeLista from './conponents/filme/FilmeLista';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FilmeLista />
      </div>
    );
  }
}

export default App;

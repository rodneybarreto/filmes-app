import React from 'react';

import './App.css';
import FilmeList from './conponents/filme/FilmeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FilmeList />
      </div>
    );
  }
}

export default App;

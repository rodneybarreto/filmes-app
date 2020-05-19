import React from 'react';

import FilmeCard from './FilmeCard';
import { useBuscaFilmes, useBuscaFilmesPorId }  from './FilmeService';

class FilmeLista extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filmes: []
    };
  }

  componentDidMount() {
    this.buscaFilmes();
  }

  buscaFilmes() {
    useBuscaFilmes()
      .then(response => {
        if (response.status === 204) {
          this.setState({ filmes: [] });
        } else {
          this.setState({ filmes: response.data });
        }
      })
      .catch(errr => console.log);
  }

  render() {
    return (
      <div>
        { 
          this.state.filmes.map(f => {
            return (
              <FilmeCard key={f.id} filme={f}>
                <span>Teste</span>
              </FilmeCard>
            );
          }) 
        }
      </div>
    );
  }  

}

export default FilmeLista;

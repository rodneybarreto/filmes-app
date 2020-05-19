import React from 'react';

import { buscaPorFilmeId } from './AvaliacaoService';

class AvaliacaoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      avaliacoes: []
    };
  }

  setItem(avaliacao) {
    return (
      <tr>
        <td>{avaliacao.id}</td>
        <td>{avaliacao.pessoaNome}</td>
        <td>{avaliacao.comentario}</td>
        <td>{avaliacao.nota}</td>
      </tr>
    );
  }

  setFooter() {
    const total = this.state.avaliacoes.map(a => +a.nota).reduce((acc, curr) => acc + curr, 0); 
    const media = (total / this.state.avaliacoes.length) || 0;
   
    return (
      <tr>
        <td colSpan="3">Média</td>
        <td>{media}</td>
      </tr>
    );
  }

  setTable() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Comentário</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          { this.state.avaliacoes.map(a => this.setItem(a)) }
        </tbody>
        <tfoot>
          { this.setFooter() }
        </tfoot>
      </table>
    );
  }

  componentDidMount() {
    this.buscaAvaliacoesPorFilmeId();
  }

  buscaAvaliacoesPorFilmeId() {
    buscaPorFilmeId(this.props.filmeId)
      .then(response => {
        if (response.status === 204) {
          this.setState({ avaliacoes: [] });
        } else {
          this.setState({ avaliacoes: response.data });
        }
      })
      .catch(error => console.log);
  }

  render() {
    return(
      <div>
       { this.setTable() }
      </div>
    );
  }

}

export default AvaliacaoList;

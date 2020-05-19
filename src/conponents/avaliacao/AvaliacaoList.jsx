import React from 'react';

class AvaliacaoList extends React.Component {

  setRow(avaliacao) {
    return (
      <tr>
        <td>{avaliacao.id}</td>
        <td>{avaliacao.pessoaNome}</td>
        <td>{avaliacao.comentario}</td>
        <td>{avaliacao.nota}</td>
      </tr>
    );
  }

  setFooter(avaliacoes) {
    const total = avaliacoes.map(a => +a.nota).reduce((acc, curr) => acc + curr, 0); 
    const media = (total / avaliacoes.length) || 0;
   
    return (
      <tr>
        <td colSpan="3">Média</td>
        <td>{media}</td>
      </tr>
    );
  }

  setTable(avaliacoes) {
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
          { avaliacoes.map(a => this.setRow(a)) }
        </tbody>
        <tfoot>
          { this.setFooter(avaliacoes) }
        </tfoot>
      </table>
    );
  }

  render() {
    const { avaliacoes } = this.props;

    return (
      <div>
       { this.setTable(avaliacoes) }
      </div>
    );
  }

}

export default AvaliacaoList;

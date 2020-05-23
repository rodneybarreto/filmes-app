import React from 'react';

class AvaliacaoList extends React.Component {

  setRow(avaliacao) {
    return (
      <tr>
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
        <td colSpan="2">Média</td>
        <td>{media}</td>
      </tr>
    );
  }

  setTable(avaliacoes) {
    return (
      <table className="table table-striped table-sm">
        <thead className="thead-dark">
          <tr>
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
        <br />
       { this.setTable(avaliacoes) }
      </div>
    );
  }

}

export default AvaliacaoList;

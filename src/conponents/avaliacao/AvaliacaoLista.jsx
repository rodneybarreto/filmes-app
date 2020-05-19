import React from 'react';

import buscaAvaliacoes from './AvaliacaoHook';

const LoadingMessage = () => <p>Carregando...</p>

const Error = props => <h3>{props.message}</h3>

const AvaliacaoItem = props =>
  <tr>
    <td>{props.avaliacao.id}</td>
    <td>{props.avaliacao.pessoaNome}</td>
    <td>{props.avaliacao.comentario}</td>
    <td>{props.avaliacao.nota}</td>
  </tr>

const AvaliacaoFoot = props => {
  const total = props.avaliacoes.map(a => +a.nota).reduce((acc, curr) => acc + curr, 0); 
  const media = (total / props.avaliacoes.length) || 0;
 
  return (
    <tr>
      <td colSpan="3">Média</td>
      <td>{media}</td>
    </tr>
  );
}

const AvaliacaoTable = props => 
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
      { props.avaliacoes.map(a => <AvaliacaoItem key={a.id} avaliacao={a} />) }
    </tbody>
    <tfoot>
      { <AvaliacaoFoot avaliacoes={props.avaliacoes} /> }
    </tfoot>
  </table>

const AvaliacaoLista = props => {
  const [avaliacoes, isLoading, error, listaAvaliacoes] = buscaAvaliacoes();
  return (
    <div>
      <button onClick={listaAvaliacoes}>Busca</button>
      <br />
      { 
        error ? <Error message={error} /> :
        (isLoading ? <LoadingMessage /> : <AvaliacaoTable avaliacoes={avaliacoes} />) 
      }
    </div>
  );
}

export default AvaliacaoLista;
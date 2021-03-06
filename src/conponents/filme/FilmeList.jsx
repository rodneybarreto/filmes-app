import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AvaliacaoList from '../avaliacao/AvaliacaoList';
import FilmeService from '../../services/filme.service';

export default class FilmeList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filmes: [],
      currentFilme: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    FilmeService.getAll()
      .then(res => this.setState({
        filmes: res.data
      }))
      .catch(err => console.log);
  }

  setCurrentFilme(filme, index) {
    this.setState({
      currentFilme: filme,
      currentIndex: index
    });
  }

  render() {
    const { filmes, currentFilme, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Filmes</h4>
          <ul className="list-group">
            {
              filmes && filmes.map((filme, index) => (
                <li 
                  className={"list-group-item "+ (index === currentIndex ? "active": "")}
                  onClick={() => this.setCurrentFilme(filme, index)}
                  key={index}
                >
                  {filme.titulo}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          {
            currentFilme ? (
              <div>
                <h4>{currentFilme.titulo}</h4>
                <div>
                  <label>{currentFilme.sinopse}</label>
                </div>
                <div>
                  <label>{currentFilme.anoLancamento}</label>
                </div>
                <div>
                  <label>{currentFilme.produtores}</label>
                </div>
                <div>
                  <label>{currentFilme.protagonistas}</label>
                </div>
                <Link to={'/filmes/'+ currentFilme.id} className="badge badge-warning">Editar</Link>
                <div>
                  <AvaliacaoList avaliacoes={currentFilme.avaliacoes} />
                </div>
              </div>
            ) : (
              <div>
                <br />
                <p>Click no filme para ver os detalhes...</p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
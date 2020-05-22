import React, { Component } from 'react';

import FilmeService from '../../services/filme.service';

export default class FilmeAdd extends Component {

  constructor(props) {
    super(props);

    this.setTitulo = this.setTitulo.bind(this);
    this.setSinopse = this.setSinopse.bind(this);
    this.setAnoLancamento = this.setAnoLancamento.bind(this);
    this.setProdutores = this.setProdutores.bind(this);
    this.setProtagonistas = this.setProtagonistas.bind(this);
    this.novo = this.novo.bind(this);
    this.salva = this.salva.bind(this);

    this.state = {
      id: null,
      titulo: '',
      sinopse: '',
      anoLancamento: '',
      produtores: '',
      protagonistas: '',
      submitted: false
    };
  }

  setTitulo(e) {
    this.setState({ titulo: e.target.value });
  }

  setSinopse(e) {
    this.setState({ sinopse: e.target.value });
  }

  setAnoLancamento(e) {
    this.setState({ anoLancamento: e.target.value });
  }

  setProdutores(e) {
    this.setState({ produtores: e.target.value });
  }

  setProtagonistas(e) {
    this.setState({ protagonistas: e.target.value });
  }

  novo() {
    this.setState({
      id: null,
      titulo: '',
      sinopse: '',
      anoLancamento: '',
      produtores: '',
      protagonistas: '',
      submitted: false      
    });
  }

  salva() {
    let data = {
      titulo: this.state.titulo,
      sinopse: this.state.sinopse,
      anoLancamento: this.state.anoLancamento,
      produtores: this.state.produtores,
      protagonistas: this.state.protagonistas
    }

    FilmeService.create(data)
      .then(res => this.setState({
        id: res.id,
        titulo: res.titulo,
        sinopse: res.sinopse,
        anoLancamento: res.anoLancamento,
        produtores: res.produtores,
        protagonistas: res.protagonistas,
        submitted: true
      }))
      .catch(err => console.log); 
  }

  render() {
    return (
      <div className="submit-form">
        { this.state.submitted ? (
          <div>
            <h4>Filme salvo com sucesso</h4>
            <button className="btn btn-success" onClick={this.novo}>Novo</button>
          </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input type="text" className="form-control" id="titulo" required 
                  value={this.state.titulo} onChange={this.setTitulo} name="titulo" />
              </div>
              <div className="form-group">
                <label htmlFor="sinopse">Sinopse</label>
                <input type="text" className="form-control" id="sinopse" required
                  value={this.state.sinopse} onChange={this.setSinopse} name="sinopse" />
              </div>
              <div className="form-group">
                <label htmlFor="anoLancamento">Ano de Lancamento</label>
                <input type="text" className="form-control" id="anoLancamento" required
                  value={this.state.anoLancamento} onChange={this.setAnoLancamento} name="anoLancamento" />
              </div>
              <div className="form-group">
                <label htmlFor="produtores">Produtores</label>
                <input type="text" className="form-control" id="produtores" required
                  value={this.state.produtores} onChange={this.setProdutores} name="produtores" />
              </div>
              <div className="form-group">
                <label htmlFor="protagonistas">Protagonistas</label>
                <input type="text" className="form-control" id="protagonistas" required
                  value={this.state.protagonistas} onChange={this.setProtagonistas} name="protagonistas" />
              </div>                            
              <button onClick={this.salva} className="btn btn-success">Salvar</button>
            </div>
          )
        } 
      </div>
    );
  }

}

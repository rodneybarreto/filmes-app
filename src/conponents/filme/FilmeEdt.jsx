import React, { Component } from 'react';

import FilmeService from '../../services/filme.service';

export default class FilmeEdit extends Component {

  constructor(props) {
    super(props);

    this.setTitulo = this.setTitulo.bind(this);
    this.setSinopse = this.setSinopse.bind(this);
    this.setAnoLancamento = this.setAnoLancamento.bind(this);
    this.setProdutores = this.setProdutores.bind(this);
    this.setProtagonistas = this.setProtagonistas.bind(this);
    this.getFilme = this.getFilme.bind(this);    
    this.atualiza = this.atualiza.bind(this);    

    this.state = {
      currentFilme: {
        id: null,
        titulo: '',
        sinopse: '',
        anoLancamento: '',
        produtores: '',
        protagonistas: ''
      },
      message: ''
    };
  }

  componentDidMount() {
    this.getFilme(this.props.match.params.id);
  }

  setTitulo(e) {
    const titulo = e.target.value;
    
    this.setState(prev => ({
      currentFilme: {
        ...prev.currentFilme,
        titulo: titulo
      }
    }));
  }

  setSinopse(e) {
    const sinopse= e.target.value;
    
    this.setState(prev => ({
      currentFilme: {
        ...prev.currentFilme,
        sinopse: sinopse
      }
    }));
  }

  setAnoLancamento(e) {
    const anoLancamento = e.target.value;
    
    this.setState(prev => ({
      currentFilme: {
        ...prev.currentFilme,
        anoLancamento: anoLancamento
      }
    }));
  }

  setProdutores(e) {
    const produtores = e.target.value;
    
    this.setState(prev => ({
      currentFilme: {
        ...prev.currentFilme,
        produtores: produtores
      }
    }));
  }

  setProtagonistas(e) {
    const protagonistas = e.target.value;
    
    this.setState(prev => ({
      currentFilme: {
        ...prev.currentFilme,
        protagonistas: protagonistas
      }
    }));    
  }

  getFilme(id) {
    FilmeService.get(id)
      .then(res => { 
        this.setState({ currentFilme: res.data });
        console.log(this.state.currentFilme);
      })
      .catch(err => console.log);
  }

  atualiza() {
    FilmeService.update(this.satate.currentFilme.id, this.state.currentFilme)
      .then(res => this.setState({
          message: 'Filme atualizado com sucesso.'
      }))
      .catch(err => console.log); 
  }
  
  render() {
    const { currentFilme } = this.state;

    return (
      <div>
        { 
          currentFilme ? (
            <div className="edit-form">
              <form>
                <div className="form-group">
                  <label htmlFor="titulo">Titulo</label>
                  <input type="text" className="form-control" id="titulo" 
                    value={currentFilme.titulo} onChange={this.setTitulo} name="titulo" />
                </div>
                <div className="form-group">
                  <label htmlFor="sinopse">Sinopse</label>
                  <input type="text" className="form-control" id="sinopse"
                    value={currentFilme.sinopse} onChange={this.setSinopse} name="sinopse" />
                </div>
                <div className="form-group">
                  <label htmlFor="anoLancamento">Ano de Lancamento</label>
                  <input type="text" className="form-control" id="anoLancamento"
                    value={currentFilme.anoLancamento} onChange={this.setAnoLancamento} name="anoLancamento" />
                </div>
                <div className="form-group">
                  <label htmlFor="produtores">Produtores</label>
                  <input type="text" className="form-control" id="produtores"
                    value={currentFilme.produtores} onChange={this.setProdutores} name="produtores" />
                </div>
                <div className="form-group">
                  <label htmlFor="protagonistas">Protagonistas</label>
                  <input type="text" className="form-control" id="protagonistas"
                    value={currentFilme.protagonistas} onChange={this.setProtagonistas} name="protagonistas" />
                </div>                            
                <div>
                  <button onClick={this.atualiza} className="btn btn-success">Salvar</button>
                </div>
              </form>
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Click no filme para ver os detalhes...</p>
            </div>
          ) 
        }
      </div>      
    );
  }

}


import React from 'react';
import './FilmeCard.css';

class FilmeCard extends React.Component {

  render() {
    return (
      <div className="Card">
        <div className="Content">
          <h2>{this.props.filme.titulo}</h2>
          <p>{this.props.filme.sinopse}</p>
          <p>{this.props.filme.anoLancamento}</p>
          <p>{this.props.filme.produtores}</p>
          <p>{this.props.filme.protagonistas}</p>
        </div>
        <div className="Footer">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default FilmeCard;

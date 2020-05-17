import React from 'react';

import './Card.css';

export default props =>
  <div className="Card">
    <div className="Content">
      <h2>{props.filme.titulo}</h2>
      <p>{props.filme.sinopse}</p>
      <p>{props.filme.produtores}</p>
      <p>{props.filme.protagonistas}</p>
    </div>
    <div className="Footer">
      {props.children}
    </div>
  </div>
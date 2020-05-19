import axios from 'axios';

const buscaTodas = (success, error) => 
  axios
    .get(`http://localhost:8081/filmes-api/v1/avaliacoes`)
    .then(success)
    .catch(error);

const buscaPorId = (avaliacaoId, success, error) =>
  axios
    .get(`http://localhost:8081/filmes-api/v1/avaliacoes/${avaliacaoId}`)
    .then(success)
    .catch(error);

export { buscaTodas, buscaPorId }

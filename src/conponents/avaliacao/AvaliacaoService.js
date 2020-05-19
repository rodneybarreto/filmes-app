import axios from 'axios';

const buscaTodas = (success, error) => 
  axios
    .get(`http://localhost:8081/filmes-api/v1/avaliacoes`)
    .then(success)
    .catch(error);

const buscaPorFilmeId = (filmeId) =>
  axios.get(`http://localhost:8081/filmes-api/v1/avaliacoes/${filmeId}`);

export { buscaTodas, buscaPorFilmeId }

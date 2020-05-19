import axios from 'axios';

const useBuscaFilmes = () => 
  axios.get('http://localhost:8081/filmes-api/v1/filmes'); 

const useBuscaFilmesPorId = (filmeId, success, error) =>
  axios
    .get(`http://localhost:8081/filmes-api/v1/filmes/${filmeId}`)
    .then(success)
    .catch(error); 

export { useBuscaFilmes, useBuscaFilmesPorId }

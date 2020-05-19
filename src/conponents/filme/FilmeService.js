import axios from 'axios';

const useBuscaFilmes = () => 
  axios.get('http://localhost:8081/filmes-api/v1/filmes'); 

const useBuscaFilmesPorId = (filmeId) =>
  axios.get(`http://localhost:8081/filmes-api/v1/filmes/${filmeId}`); 

export { useBuscaFilmes, useBuscaFilmesPorId }

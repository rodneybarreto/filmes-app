import axios from 'axios';

const useBuscaTodosOsFilmes = () => 
  axios.get('http://localhost:8081/filmes-api/v1/filmes'); 

const useBuscaFilmePorId = (filmeId) =>
  axios.get(`http://localhost:8081/filmes-api/v1/filmes/${filmeId}`); 

export { useBuscaTodosOsFilmes, useBuscaFilmePorId }

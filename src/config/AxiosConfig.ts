import axios from "axios";

const FILMES_API = axios.create({
  baseURL: 'http://localhost:8081/filmes-api/v1'
})

export default FILMES_API
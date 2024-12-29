import axios from "axios"

export default function FilmeService() {

  const _getAll = () => {
    axios
      .get('http://localhost:8081/filmes-api/v1/filmes')
      .then(res => res.data)
      .catch(err => console.log(err))
  }

  return {
    getAll: _getAll
  }

}
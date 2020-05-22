import api from '../environment/environment';

class FilmeService {

  getAll() {
    return api.get("/v1/filmes");
  }

  get(id) {
    return api.get(`/v1/filmes/${id}`);
  }

  create(data) {
    return api.post("/v1/filmes", data);
  }

  update(id, data) {
    return api.put(`/v1/filmes/${id}`, data);
  }

  delete(id) {
    return api.delete(`/v1/filmes/${id}`);
  }
  
}

export default new FilmeService();

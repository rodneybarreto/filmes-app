export default class Filme {
  #id
  #titulo
  #sinopse
  #ano_lancamento
  
  constructor(id: number, titulo: string, sinopse: string, ano_lancamento: number) {
    this.#id = id
    this.#titulo = titulo
    this.#sinopse = sinopse
    this.#ano_lancamento = ano_lancamento
  }

  static empty() {
    return new Filme(0, '', '', 0)
  }

  get id() {
    return this.#id
  }

  get titulo() {
    return this.#titulo
  }

  get sinopse() {
    return this.#sinopse
  }

  get ano_lancamento() {
    return this.#ano_lancamento
  }

}
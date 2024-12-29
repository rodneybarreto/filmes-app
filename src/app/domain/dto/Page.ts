export default class Page {
  #number: number
  #size: number
  #totalElements: number
  #totalPages: number

  constructor(number: number, size: number, totalElements: number, totalPages: number) {
    this.#number = number
    this.#size = size
    this.#totalElements = totalElements
    this.#totalPages = totalPages
  }

  get number() {
    return this.#number
  }

  get size() {
    return this.#size
  }

  get totalElements() {
    return this.#totalElements
  }

  get totalPages() {
    return this.#totalPages
  }

  static empty() {
    return new Page(0, 0, 0, 0)
  }

}
import Page from "./Page"

export default class ResultPaginated {
  #content: any[]
  #page: Page

  constructor(content: any[], page: Page) {
    this.#content = content
    this.#page = page
  }

  get content(): any[] {
    return this.#content
  }

  get page(): Page {
    return this.#page
  }

  static empty() {
    return new ResultPaginated([], Page.empty())
  }

}

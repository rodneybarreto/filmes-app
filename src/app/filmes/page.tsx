"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Filme from "@/domain/Filme"
import Page from "../domain/dto/Page"
import ResultPaginated from "../domain/dto/ResultPaginated"

export default function FilmesList() {
  const router = useRouter()
  const [filmes, setFilmes] = useState<Filme[]>([])
  const [page, setPage] = useState<Page>(Page.empty())

  useEffect(() => {
    axios.get('http://localhost:8081/filmes-api/v1/filmes')
      .then(res => {
        const filmePaginated = new ResultPaginated(res.data.content, res.data.page)
        setFilmes(filmePaginated.content)
        setPage(filmePaginated.page)
      })
      .catch(error => console.log(error))
  }, [])

  function excluir(id: number) {
    axios.delete(`http://localhost:8081/filmes-api/v1/filmes/${id}`)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <button onClick={() => router.push('/filmes/id/form')}>Novo</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Sinopse</th>
            <th>Ano Lançamento</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map(filme => ( 
            <tr key={filme.id}>
              <td>{filme.id}</td>
              <td>{filme.titulo}</td>
              <td>{filme.sinopse}</td>
              <td>{filme.ano_lancamento}</td>
              <td>
                <button onClick={() => router.push(`/filmes/${filme.id}/form`)}>Editar</button>
                <button onClick={() => excluir(filme.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
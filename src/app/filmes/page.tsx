"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import FILMES_API from "@/config/AxiosConfig"
import Filme from "@/domain/Filme"

export default function FilmesList() {
  const router = useRouter()
  const [filmes, setFilmes] = useState<Filme[]>([])

  useEffect(() => findAll(), [])

  function findAll() {
    FILMES_API.get('/filmes')
    .then(res => setFilmes(res.data.content))
    .catch(error => console.log(error))
  }

  function excluir(id: number) {
    FILMES_API.delete(`/filmes/${id}`)
      .then(res => {
        console.log(res.data)
        findAll()
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <div className="text-end px-10">
        <button className="p-2 text-gray-900 bg-cyan-500" onClick={() => router.push('/filmes/id/form')}>Novo</button>
      </div>
      <table>
        <thead>
          <tr className="text-yellow-400 bg-slate-800">
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
                <button className="p-2 me-1 text-gray-900 bg-cyan-500" onClick={() => router.push(`/filmes/${filme.id}/form`)}>Editar</button>
                <button className="p-2 text-gray-900 bg-cyan-500" onClick={() => excluir(filme.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
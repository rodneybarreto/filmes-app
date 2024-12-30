'use client'
import { FormEvent, useEffect, useState } from "react"
import { useParams } from "next/navigation"
import FILMES_API from "@/config/AxiosConfig"
import Link from "next/link"

export default function FilmeForm() {
  const params = useParams<{id: string}>()
  const [titulo, setTitulo] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [anoLancamento, setAnoLancamento] = useState(0)
  const headers = {'Content-Type':'application/json;charset=UTF-8'}

  useEffect(() => {
    if (params.id !== 'id') {
      FILMES_API.get(`/filmes/${params.id}`)
        .then(res => {
          setTitulo(res.data.titulo)
          setSinopse(res.data.sinopse)
          setAnoLancamento(res.data.ano_lancamento)
        })
        .catch(error => console.log(error))
    }
  }, [])

  function salvar(event: FormEvent) {
    event.preventDefault()
    if (params.id !== 'id') {
      FILMES_API.put(`/filmes/${params.id}`, {id: +params.id, titulo, sinopse, ano_lancamento: anoLancamento}, {headers})
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    } else {
      FILMES_API.post('/filmes', {titulo, sinopse, ano_lancamento: anoLancamento}, {headers})
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }
  }

  return (
    <div>
      <form className="flex flex-col" onSubmit={(e) => salvar(e)}>
        <input type="hidden" name="id" value={params.id} className="text-gray-900" />
        <label htmlFor="titulo">Título</label>
        <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="text-gray-900" />
        <label htmlFor="sinopse">Sinopse</label>
        <input type="text" name="sinopse" value={sinopse} onChange={(e) => setSinopse(e.target.value)} className="text-gray-900" />
        <label htmlFor="anoLancamento">Ano de Lançamento</label>
        <input type="number" name="anoLancamento" value={anoLancamento} onChange={(e) => setAnoLancamento(+e.target.value)} className="text-gray-900" />
        <div className="mt-1">
          <button type="submit" className="p-2 me-1 text-gray-900 bg-cyan-500">Salvar</button>
          <Link href={'/filmes'}>
            <button className="p-2 text-gray-900 bg-cyan-500">voltar</button> 
          </Link>
        </div>
      </form>
    </div>
  )
}
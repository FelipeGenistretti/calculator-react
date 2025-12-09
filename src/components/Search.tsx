import { useState } from "react"

export function Search(){
      function handleAddNome(){
    if(!nome.trim()) return
    setListaNomes([...listaNomes,nome])
    setNome("")
  }

  function handleDelete(){
    if(listaNomes === null) return
    setListaNomes([""])
  }

  const [nome, setNome] = useState("")
  const [listaNomes, setListaNomes] = useState<string[]>([])

  const [search, setSearch] = useState("")
    return (
         <div className='container-custom flex gap-3'>

      <div>
        <div className='flex gap-3'>

          <input 
            placeholder='insira um nome'
            className='p-2 rounded-sm'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text" />

            
          <input 
            placeholder='pesquisar...'
            className='p-2 rounded-sm'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" />

            {listaNomes.filter((nome)=>nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .map((nome, idx)=><li key={idx}>{nome}</li>)}

          </div>
          

          <div>
            {
              listaNomes.map((f, idx)=><li key={idx}>{f}</li>)
            }
          </div>

          <div className='gap-3'>
            <button onClick={handleAddNome} className='p-3 bg-blue-600 text-white'>add nome</button>
            <button onClick={handleDelete} className='p-3 bg-red-600 text-white'>Apagar lista</button>
          </div>
      </div>
    </div>
    )
}
import { useState } from "react"

export function Lista(){
    const [fruta, setFruta] = useState("")
      const [lista, setLista] = useState<string[]>([])
    
      function handleAdd(){
        if(!fruta.trim()) return
        setLista([...lista, fruta])
        setFruta("")
      }
    
      function handleDelete(){
        if(lista === null) return
        setLista([""])
      }
    
      function removerElemento(index:number){
          setLista(lista.filter((_, i)=> i !== index))
      }
    return (
        <div className='container-custom'>
        <h1 className='text-blue-500 text-4xl'>Teste</h1>
        <div className='gap-3'>
          <input 
            placeholder='insira uma fruta'
            className='p-3 rounded-md'
            value={fruta}
            onChange={(e) => setFruta(e.target.value)}
            type="text" />

            <button className="p-3 bg-blue-600 text-white" onClick={handleAdd}>Adicionar Fruta</button>
            <button className="p-3 bg-red-600 text-white" onClick={handleDelete}>Remover itens da lilsta</button>
        </div>
        <div>
          <ul>
            
             {lista.map((f, index) => (
          <li key={index}>{f}</li>
        ))}

          </ul>
          <div>
            { lista.map((f, index)=>(
              <button onClick={()=>removerElemento(index)} key={index}>Remover {f}</button>
            ))}
          </div>
        </div>
    </div>
    )
}
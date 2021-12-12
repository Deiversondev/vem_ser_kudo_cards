import { useEffect, useState } from "react"
import api from "../api"

function InitialPage (){

  const[listSprints, setListSprints] = useState([])
  
  useEffect(()=>{
    getSprint()
  },[])

  const getSprint =async () =>{
    const {data} =  await api.get('/sprint/listar-sprint')
    setListSprints(data)
  }
  console.log(listSprints)
  const irPagNovaSprint = () => {
    window.location.href='/createsprint'
  }

  return(
    <div>
      <h1>Página Inicial</h1>
      <button type="button" onClick={()=> irPagNovaSprint()} >Criar nova sprint</button>

      <ul>
        {listSprints.map((sprint, idSprint)=>(
          <div>
            <li key={idSprint}>
              {sprint.idSprint}
              {sprint.titulo}
              {sprint.dataConclusao}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default InitialPage;
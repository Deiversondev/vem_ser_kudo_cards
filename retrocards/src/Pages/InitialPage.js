import { useEffect } from "react"
import api from "../api"

function InitialPage (){
  
  useEffect(()=>{
    getSprint()
  },[])

  const getSprint =async () =>{
    const {data} =  await api.get('/sprint/listar-sprint')
    console.log(data)
    console.log('test')
  }
  const irPagNovaSprint = () => {
    window.location.href='/createsprint'
  }

  return(
    <div>
      <h1>Página Inicial</h1>
      <button type="button" onClick={()=> irPagNovaSprint()} >Criar nova sprint</button>
    </div>
  )
}

export default InitialPage;
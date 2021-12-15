import { useContext, useEffect } from "react"
import { ListContext } from "../context/ListContext"
import api from "../api"
import CardSprint from "../components/cardSprint/CardSprint"

function InitialPage (){

  const{listSprints, setListSprints} = useContext(ListContext)
  
  useEffect(()=>{
    getSprint()
  },[])

  const getSprint =async () =>{
    const {data} =  await api.get('/sprint/listar-sprint')
    setListSprints(data)
  }

  const irPagNovaSprint = () => {
    window.location.href='/createsprint';
  }

  return(
    <div>
      <h1>Página Inicial</h1>
      <button type="button" onClick={()=> irPagNovaSprint()} >Criar nova sprint</button>
      {listSprints.length !== 0 && <CardSprint/>}
      {listSprints.length === 0 && <p>Não existem Sprints cadastradas</p>}
      
    </div>
  )
}

export default InitialPage;
import { useContext, useEffect } from "react"
import { ListContext } from "../../context/ListContext"
import api from "../../api"
import CardSprint from "../../components/cardSprint/CardSprint"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'

function InitialPage (){

  const{listSprints, setListSprints} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)
  
  useEffect(()=>{
    getSprint()
  },[])

  const getSprint =async () =>{
    setLoading(true)
    const {data} =  await api.get('/sprint/listar-sprint')
    setLoading(false)
    setListSprints(data)
  }

  const irPagNovaSprint = () => {
    window.location.href='/createsprint';
  }

  const getRecentRetrospectiva = async() =>{
    setLoading(true)
    const {data} = await api.get('/retrospectiva/findo-retro-mais-recente')
    setLoading(false)
    
    const recentRetro = data.map(e => (
      e.idRetrospectiva
    ))
  
    localStorage.setItem('IdRetrospectiva',recentRetro[0]) 
    window.location.href ='/retrospectiva'
  }

  return(
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Página Inicial</h1>
        {/* {recentRetro.map(e => (
          e.IdRetrospectiva)
        )} */}

        <button type="button" onClick={()=> getRecentRetrospectiva()} >Retrospectiva mais recente</button>
        <button type="button" onClick={()=> irPagNovaSprint()} >Criar nova sprint</button>
        {listSprints.length !== 0 && <CardSprint/>}
        {listSprints.length === 0 && <p>Não existem Sprints cadastradas</p>}
      </div>
      }
    </div>
  )
}

export default InitialPage;
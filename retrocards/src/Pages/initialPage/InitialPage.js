import { useContext, useEffect } from 'react'
import { ListContext } from '../../context/ListContext'
import api from '../../api'
import CardSprint from '../../components/cardSprint/CardSprint'
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import CardKudoBoxEmAndamento from '../../components/cardKudoBox/CardKudoBoxEmAndamento '
import CardKudoCardEcerrado from '../../components/cardKudoCard/CardKudoCardEcerrado'
import styles from './InitialPage.module.css'

function InitialPage (){

  const{listSprints, setListSprints} = useContext(ListContext)
  const{listKudoBoxesEmAndamento, setListKudoBoxesEmAndamento} = useContext(ListContext)
  const{listKudoCardsEncerrados, setListKudoCardsEncerrados} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)
  
  useEffect(()=>{

    getSprint()
    getKudoBoxEmAndamento()
    getKudoCardsEncerrados()
    getUpdateStatusKudoBox()

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

  const getKudoBoxEmAndamento = async()=> {
    setLoading(true)
    const {data} = await api.get('/kudobox')
    setLoading(false)
    setListKudoBoxesEmAndamento(data)

  }

  const getKudoCardsEncerrados = async()=> {
    setLoading(true)
    const {data} = await api.get('/kudocard/find-by-sprint')
    setLoading(false)
    setListKudoCardsEncerrados(data)
    console.log()

  }

  const getUpdateStatusKudoBox = async ()=> {

    setLoading(true)
    await api.get('/kudobox/listar-atualizando-status')
    setLoading(false)
  }

  const goToMeusKudoCards = async() => {
    window.location.href = '/kudocardsuser'
  }

  return(
    <div >
      {loading && <Loading/>}
      {!loading && 
      <div>
        

      <div className={styles.btns}>
      <button type="button" onClick={()=> goToMeusKudoCards()} >Meus KudoCards</button>
      <button type="button" onClick={()=> getRecentRetrospectiva()} >Retrospectiva mais recente</button>
      <button type="button" onClick={()=> irPagNovaSprint()} >Criar nova sprint</button>
      </div>
      <div className={styles.body}>
        
        {listSprints.length !== 0 && <CardSprint/>}
        {listSprints.length === 0 && <p>Não existem Sprints cadastradas</p>}
       
        {listKudoBoxesEmAndamento.length !== 0 && <CardKudoBoxEmAndamento/>}
        {listKudoBoxesEmAndamento.length === 0 && <p>Não existem Kudo Boxes em andamento</p>}
        
        {listKudoCardsEncerrados.length !== 0 && <CardKudoCardEcerrado/>}
        {listKudoCardsEncerrados.length === 0 && <p>Não existem Kudo Cards arquivados</p>}
      </div>
      </div>
      }
    </div>
  )
}

export default InitialPage;
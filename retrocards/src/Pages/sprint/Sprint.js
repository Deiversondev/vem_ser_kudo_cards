import { useEffect, useContext } from "react";
import { ListContext } from "../../context/ListContext";
import api from "../../api";
import CardRetrospectiva from "../../components/cardRetrospectiva/CardRetrospectiva";
import CardKudoBox from "../../components/cardKudoBox/CardKudoBox";
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import CardKudoCardEcerradoSprint from '../../components/cardKudoCard/CardKudoCardEcerradoSprint'
import { UserGroupContext } from '../../context/UserGroupContext'
import styles from './Sprint.module.css'

function Sprint (){

  const{loading, setLoading}= useContext(AuthContext)
  const{getUserGroup, idGrupo, getlocalIdGrupo}= useContext(UserGroupContext)

  const
  {
    listRetrospectivas, 
    setListRetrospectivas, 
    listKudoBoxes, 
    setListKudoBoxes,
    listKudoCardsEncerradosSprint, 
    setListKudoCardsEncerradosSprint
  } = useContext(ListContext)
  

  useEffect(async()=>{

    getRetrospectiva()
    getKudoBox()
    getKudoCardsEncerradosSprint()
    await getUserGroup()
    getlocalIdGrupo()

  },[])

  const goToCreateKudoBox = () => {

    window.location.href = '/createkudobox'
  } 
 
  const goToCreateRetrospectiva = () => {

    window.location.href = '/createretrospectiva'
  } 
  
  const getRetrospectiva= async() =>{

    const idSprint = localStorage.getItem('idSprint')
    setLoading(true)
    const {data} = await api.get(`/retrospectiva/listar-por-id-sprint?idSprint=${idSprint}`)
    setLoading(false)
    setListRetrospectivas(data)
    
  }

  const getKudoBox= async() =>{

    const idSprint = localStorage.getItem('idSprint')
    setLoading(true)
    const {data} = await api.get(`/kudobox/id-sprint?idSprint=${idSprint}`)
    console.log(data)
    setLoading(false)
    setListKudoBoxes(data)
  
  }

  const getKudoCardsEncerradosSprint = async()=> {

    const idSprint = localStorage.getItem('idSprint')
    setLoading(true)
    const {data} = await api.get(`/kudocard/find-by-id-sprint?idSprint=${idSprint}`)
    setLoading(false)
    setListKudoCardsEncerradosSprint(data)
    console.log(listKudoCardsEncerradosSprint)
  }
    
  const checkIfEmAndamento = listRetrospectivas.find(e => e.statusRetrospectivaEntity === 'EM_ANDAMENTO')
  console.log(checkIfEmAndamento)
  
  return(
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Página Sprint</h1>
        {(idGrupo ==  1) &&
        <button className={styles.btn} type="button" onClick={()=> goToCreateRetrospectiva()} >Criar nova Retrospectiva</button>
        }
        {(idGrupo ==  1) &&
        <button className={styles.btn} type="button" onClick={()=> goToCreateKudoBox()} >Criar nova Kudo Box</button>
        }
        {listRetrospectivas.length !== 0 && <CardRetrospectiva/>}
        {listRetrospectivas.length === 0 && <p>Não existem Retrospectivas cadastradas</p>}
       
        {listKudoBoxes.length !== 0 && <CardKudoBox/>}
        {listKudoBoxes.length === 0 && <p>Não existem Kudo Boxes cadastradas</p>}
        
        {listKudoCardsEncerradosSprint.length !== 0 && <CardKudoCardEcerradoSprint/>}
        {listKudoCardsEncerradosSprint.length === 0 && <p>Não existem Kudo Cards arquivados</p>}
      </div>
      }
    </div>
    
  )
}

export default Sprint;
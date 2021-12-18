import api from "../../api"
import { useEffect, useContext } from "react"
import { ListContext } from "../../context/ListContext"
import CardKudoCard from "../../components/cardKudoCard/CardKudoCard"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'


function KudoBox (){

  const{listKudoCards, setListKudoCards} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)

  useEffect (()=>{

    getKudoCards()

  },[])

  const goToCreateKudoCard = ()=>{
    
    window.location.href = '/createkudocards'
  }

  const getKudoCards= async() =>{

    const idKudoBox = localStorage.getItem('idKudoBox')
    setLoading(true)
    const {data} = await api.get(`/kudocard/list-por-box?id=${idKudoBox}`)
    setLoading(false)
    setListKudoCards(data)
    
  }

  
  return(
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Página KudoBox</h1>
        <button onClick={()=> goToCreateKudoCard()}>Criar novo Kudo Card </button>
        {listKudoCards.length !== 0 && <CardKudoCard/>}
        {listKudoCards.length === 0 && <p>Não existem Kudo Cards cadastrados</p>}
      </div>
      }
    </div>
  )
}

export default KudoBox;
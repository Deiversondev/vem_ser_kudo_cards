import api from "../api"
import { useEffect, useContext } from "react"
import { ListContext } from "../context/ListContext"
import CardKudoCard from "../components/cardKudoCard/CardKudoCard"



function KudoBox (){

  const{setListKudoCards} = useContext(ListContext)

  useEffect (()=>{

    getKudoCards()

  },[])

  const goToCreateKudoCard = ()=>{
    
    window.location.href = '/createkudocards'
  }
  const getKudoCards= async() =>{

    const idKudoBox = localStorage.getItem('idKudoBox')

    const {data} = await api.get(`/kudocard/list-por-box?id=${idKudoBox}`)
    setListKudoCards(data)
    console.log(data)
  }
  
  return(
    <div>
      <h1>Página KudoBox</h1>
      <button onClick={()=> goToCreateKudoCard()}>Criar novo Kudo Card </button>
      <CardKudoCard/>
    </div>
  )
}

export default KudoBox;
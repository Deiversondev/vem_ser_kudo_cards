import { useContext, useEffect } from "react"
import { ListContext } from "../context/ListContext"
import api from "../api"


function KudoCard (){

  useEffect (()=>{

    getKudoCard()

  },[])

  const{detalheKudoCard, setDetalheKudoCard} = useContext(ListContext)

  const getKudoCard= async() =>{

    const idKudoCard = localStorage.getItem('idKudoCard')

    const {data} = await api.get(`/kudocard/{idKudoCard}?idKudoCard=${idKudoCard}`)
    setDetalheKudoCard([data])
    console.log(data)
  }
  
  return(
    <div>
      <h1>Página KudoCard</h1>
      <ul>
        {detalheKudoCard.map(card => (
          <div key={card.idKudoCard}>
            <li>
            {card.titulo}
            {card.dataCriacao}
            {card.de}
            {card.para}
            {card.descricao}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default KudoCard;
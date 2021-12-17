import { useContext, useEffect } from "react"
import { ListContext } from "../../context/ListContext"
import api from "../../api"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'


function KudoCard (){

  useEffect (()=>{

    getKudoCard()

  },[])

  const{detalheKudoCard, setDetalheKudoCard} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)

  const getKudoCard= async() =>{

    const idKudoCard = localStorage.getItem('idKudoCard')

    setLoading(true)
    const {data} = await api.get(`/kudocard/{idKudoCard}?idKudoCard=${idKudoCard}`)
    setLoading(false)

    setDetalheKudoCard([data])
   
  }
  
  return(
    <div>
      {loading && <Loading/>}
      {!loading && 
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
      }
    </div>
  )
}

export default KudoCard;
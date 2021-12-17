import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../loading/Loading'


function CardKudoCard (){

  const{listKudoCards} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)  
  

  const goToKudoCard = (idKudoCard)=> {
    localStorage.setItem('idKudoCard', idKudoCard)
    window.location.href='/kudocard'
  }

  const deleteKudoCard = async(idKudoCard) =>{

    setLoading(true)
    await api.delete(`/kudocard/${idKudoCard}`)
    setLoading(false)
    window.location.reload()
  }

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <ul>
          {listKudoCards.map(kudoCard => (
            <div key={kudoCard.idKudoCard}>
              <li>
              {kudoCard.idKudoCard}
              {kudoCard.titulo}
              {kudoCard.dataCriacao}
              {kudoCard.de}
              {kudoCard.para}
              <button onClick={()=> goToKudoCard(kudoCard.idKudoCard)}>Abrir Kudo Card</button>
              <button onClick={()=> deleteKudoCard(kudoCard.idKudoCard)}>Deletar Kudo Card</button>
              </li>
          </div>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default CardKudoCard;
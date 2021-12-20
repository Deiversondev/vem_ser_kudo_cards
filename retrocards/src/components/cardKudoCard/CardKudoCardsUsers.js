import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../loading/Loading'


function CardKudoCardsUsers (){

  const{listKudoCardsUser} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext) 

  const deletarKudocard = async(id) =>{
    setLoading(true)
    await api.delete(`/kudocard/${id}`)
    setLoading(false)

    window.location.reload()
  }
  
  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <ul>
          {listKudoCardsUser.map(kudoCard => (
            <div key={kudoCard.idKudoCard}>
            <li>
            <p>Id: {kudoCard.idKudoCard}</p>
            <p>Título: {kudoCard.titulo}</p>
            <p>Para: {kudoCard.para}</p>
            <p>Descrição: {kudoCard.descricao}</p>
            <p>KudoBox: {kudoCard.kudoBoxDTO.idKudoBox}- {kudoCard.kudoBoxDTO.titulo}- {kudoCard.kudoBoxDTO.dataLeitura}</p>
            { 
              kudoCard.kudoBoxDTO.statusKudoBoxEntity === 'EM_ANDAMENTO' &&
              <button onClick={() => deletarKudocard(kudoCard.idKudoCard)}>Deletar</button>
            }
            </li>
          </div>
          ))}
        </ul>
      </div>
      }
    </div>
  )
  
}

export default CardKudoCardsUsers;
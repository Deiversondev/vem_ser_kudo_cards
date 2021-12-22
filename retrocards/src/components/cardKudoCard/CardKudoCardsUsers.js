import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../loading/Loading'
import styles from '../cardKudoCard/CardKudoCardsUsers.module.css'
import moment from "moment";


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
    <div >
      {loading && <Loading/>}
      {!loading && 
      <div className={styles.cards}>
        <ul>
          {listKudoCardsUser.map(kudoCard => (
            <div key={kudoCard.idKudoCard} className={styles.cardUser}>
            <li>
            <p><strong>Id: </strong>{kudoCard.idKudoCard}</p>
            <p><strong>Título: </strong>{kudoCard.titulo}</p>
            <p><strong>Para: </strong>{kudoCard.para}</p>
            <p><strong>Descrição: </strong>{kudoCard.descricao}</p>
            <p><strong>KudoBox: </strong>{kudoCard.kudoBoxDTO.idKudoBox}</p>
            <p>{kudoCard.kudoBoxDTO.titulo}</p>
            <p>{moment(kudoCard.kudoBoxDTO.dataLeitura).format('DD/MM/YYYY')}</p>
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
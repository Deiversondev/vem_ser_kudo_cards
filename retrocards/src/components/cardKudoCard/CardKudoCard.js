import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../loading/Loading'
import styles from './CardKudoCard.module.css'


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
       
            <div className={styles.cards_container}>
            {listKudoCards.map(kudoCard => (
                        <div className={styles.card_main} key={kudoCard.idKudoCard}>
                          
                          <p><strong>ID: </strong>{kudoCard.idKudoCard}</p>
                         <h3>Título: {kudoCard.titulo}</h3>
                         <p> <strong>Data: </strong>  {kudoCard.dataCriacao} </p>
                         <p><strong>De: </strong>  {kudoCard.de? kudoCard.de : "Anônimo"}</p>
                         <p><strong>Para: </strong>  {kudoCard.para} </p>
                          <button  onClick={()=> goToKudoCard(kudoCard.idKudoCard)}>Abrir Kudo Card</button>
                        
                      </div>
                      ))}
                    
            </div>
      </div>
      }
    </div>
  )
}

export default CardKudoCard;
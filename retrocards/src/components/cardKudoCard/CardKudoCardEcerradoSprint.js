import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import Loading from '../loading/Loading'
import styles  from './CardKudoCardEcerrado.module.css'
import moment from "moment";


function CardKudoCardEcerradoSprint(){

  const{listKudoCardsEncerradosSprint} = useContext(ListContext) 
  

  return (
    <div className={styles.main_container}  >
    <h3>KudoCards</h3>
       <div className={styles.kudoContainer}>
          {listKudoCardsEncerradosSprint.map(kudoCard => (
              <div  key={kudoCard.idKudoCard}>
          
            <div className={styles.card_main}>
                <p><strong>ID:</strong> {kudoCard.idKudoCard}</p>
                <p><strong>Título:</strong> {kudoCard.titulo}</p>
                <p><strong>De:</strong> {kudoCard.de? kudoCard.de : "Anônimo"}</p>
                <p><strong>Para:</strong> {kudoCard.para}</p>
                <p><strong>Descrição:</strong> {kudoCard.descricao}</p>
                <p><strong>ID KudoBox:</strong> {kudoCard.kudoBoxDTO.idKudoBox}</p>
                <p><strong>Data da Leitura:</strong> {moment(kudoCard.kudoBoxDTO.dataLeitura).format('DD/MM/YYYY')}</p>
            </div>
            
            </div>
            ))}
       </div>
      
    </div>
  )
}

export default CardKudoCardEcerradoSprint;
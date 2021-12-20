import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import styles from './CardKudoCard.module.css'


function CardKudoCard (){

  const{listKudoCardsEncerrados} = useContext(ListContext) 
  

  return (
    <div className={styles.kudoCard_container}>
     <h3>Kudo Cards Encerrados</h3>
       <div className={styles.cardsContainer}>
       {listKudoCardsEncerrados.map(kudoCard => (
          <div className={styles.kudoCard_main }  key={kudoCard.idKudoCard}>
         
          <p><strong>ID: </strong> {kudoCard.idKudoCard}</p>
          <p><strong>Título: </strong> {kudoCard.titulo}</p>
          <p> <strong>De: </strong> {kudoCard.de? kudoCard.de : "Anônimo"}</p>
          <p><strong>Para: </strong>{kudoCard.para}</p>
          <p><strong>Descrição: </strong> {kudoCard.descricao}</p>
          <p><strong>ID KudoBox: </strong> {kudoCard.kudoBoxDTO.idKudoBox}</p>
          <p><strong>Data da Leitura: </strong> {kudoCard.kudoBoxDTO.dataLeitura}</p>
        
        </div>
        ))}
       </div>
     
    </div>
  )
}

export default CardKudoCard;
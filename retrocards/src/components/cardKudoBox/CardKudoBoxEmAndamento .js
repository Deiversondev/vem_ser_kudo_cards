import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import styles from './CardKudoBoxEmAberto.module.css'
import moment from "moment";



function CardKudoBoxEmAndamento (){

  const{listKudoBoxesEmAndamento} = useContext(ListContext);
  
  return (
    <div className={styles.kudoBox_Container}>
      <h3>KudoBoxes em andamento:</h3>
    
       <div className={styles.kudoBoxMain}>
       {listKudoBoxesEmAndamento.map(kudoBox => (
          <div className={styles.kudoBox} key={kudoBox.idKudoBox}>
         
          <h4><strong>ID: </strong> {kudoBox.idKudoBox}</h4>
          <p><strong>Título: </strong>  {kudoBox.titulo}</p>
          <p> <strong>Data de leitura:</strong> {moment(kudoBox.dataLeitura).format('DD/MM/YYYY')}</p>
          <p> <strong>ID Sprint: </strong>{kudoBox.sprintDTO.idSprint}</p>
          
          </div>
        ))}
       </div>
     
    </div>
  )
}

export default CardKudoBoxEmAndamento;
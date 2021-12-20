import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from "../../context/AuthContext";
import Loading from "../loading/Loading";
import styles from './CardKudoBox.module.css'
import moment from "moment";



function CardKudoBox (){

  const{listKudoBoxes} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)
  
  const goToKudoBox = (idKudoBox)=> {
    localStorage.setItem('idKudoBox', idKudoBox)
    window.location.href='/kudobox'
  }

  const startKudoBox = async(idKudoBox)=> {
    
    setLoading(true)
    await api.put(`/kudobox/${idKudoBox}/status?status=EM_ANDAMENTO`)
    setLoading(false)

    window.location.reload()
  }

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div className={styles.boxContainer}>
      
          {listKudoBoxes.map(kudoBox => (
            <div className={styles.card_main} key={kudoBox.idKudoBox}>
              <div >
              <h3><strong>Título:</strong>  {kudoBox.titulo}</h3>
              <p><strong>ID: </strong> {kudoBox.idKudoBox}</p>
              <p><strong>Status:</strong>  {kudoBox.statusKudoBoxEntity}</p>
              <p><strong>Data: </strong> {moment(kudoBox.dataLeitura).format('DD/MM/YYYY')}</p>
              {kudoBox.statusKudoBoxEntity === "CRIADO" &&
              <button onClick={()=> startKudoBox(kudoBox.idKudoBox)}>Iniciar Kudo Box</button>
              }
              {kudoBox.statusKudoBoxEntity === "ENCERRADO" &&
              <button onClick={()=> goToKudoBox(kudoBox.idKudoBox)}>Abrir Kudo Box</button>
              }
              </div>
            </div>
          ))}
       
      </div>
      }
    </div>
  )
}

export default CardKudoBox;
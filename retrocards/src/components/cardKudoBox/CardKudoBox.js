import { useContext, useEffect } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from "../../context/AuthContext";
import Loading from "../loading/Loading";
import { UserGroupContext } from '../../context/UserGroupContext';
import styles from './CardKudoBox.module.css'
import moment from "moment";



function CardKudoBox (){

  const{listKudoBoxes} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)
  const{getUserGroup, idGrupo, getlocalIdGrupo}= useContext(UserGroupContext)

  useEffect(async() =>{

    await getUserGroup()
    getlocalIdGrupo()
      
  },[])
  
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

  const goToCreateKudoCard = (id) =>{
    localStorage.setItem('idKudoBox', id )
    window.location.href = '/createkudocards'
  }
  
  const checkIfEmAndamento = listKudoBoxes.find(e => e.statusKudoBoxEntity === 'EM_ANDAMENTO')

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div className={styles.main_container} >
      <h2>KudoBoxes</h2>
         <div className={styles.boxContainer}>
         {listKudoBoxes.map(kudoBox => (
            <div className={styles.card_main} key={kudoBox.idKudoBox}>
              <div >
              <div className={styles.kudo_content}>
              <h3><strong>Título:</strong>  {kudoBox.titulo}</h3>
              <p><strong>ID: </strong> {kudoBox.idKudoBox}</p>
              <p><strong>Status:</strong>  {kudoBox.statusKudoBoxEntity.replaceAll('_', ' ')}</p>
              <p><strong>Data: </strong> {moment(kudoBox.dataLeitura).format('DD/MM/YYYY')}</p>
              </div>
              {
                (idGrupo ==  2) && (kudoBox.statusKudoBoxEntity === 'EM_ANDAMENTO') &&
                <button onClick={() => goToCreateKudoCard(kudoBox.idKudoBox)}>Criar KudoCard</button>
              }
              {(kudoBox.statusKudoBoxEntity === "CRIADO") && (checkIfEmAndamento === undefined) &&
              <button onClick={()=> startKudoBox(kudoBox.idKudoBox)}>Iniciar Kudo Box</button>
              }
              {kudoBox.statusKudoBoxEntity === "ENCERRADO" &&
              <button onClick={()=> goToKudoBox(kudoBox.idKudoBox)}>Abrir Kudo Box</button>
              }
              </div>
            </div>
          ))}
         </div>
       
      </div>
      }
    </div>
  )
}

export default CardKudoBox;
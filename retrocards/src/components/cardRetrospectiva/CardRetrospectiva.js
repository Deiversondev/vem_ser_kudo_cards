import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import styles from './CardRetrospectiva.module.css'
import moment from "moment";




function CardRetrospectiva (){

  const{listRetrospectivas} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)

  const getIdRetrospectiva = (id) => {
    localStorage.setItem('IdRetrospectiva',id)
    window.location.href = '/retrospectiva'
    console.log(listRetrospectivas)
}

const startRetro = async (id) => {

  setLoading(true)
  const {data} = await api.put(`/retrospectiva/${id}/status?status=EM_ANDAMENTO`)
  setLoading(false)

  window.location.reload()
  localStorage.setItem('IdRetrospectiva',id) 
  window.location.href = '/retrospectiva'
 
  console.log(data)
 
}

const finishRetro = async (id) => {

  setLoading(true)
  await api.put(`/retrospectiva/${id}/status?status=ENCERRADA`) 
  setLoading(false)
  
  window.location.href ='/emails'
 
}

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div >
       
          {listRetrospectivas.map((retrospectiva) => (
            <div className={styles.card_main} key={retrospectiva.idRetrospectiva}>
            <div className={styles.card_content}>
             <p> <span>ID: </span>   {retrospectiva.idRetrospectiva}</p>
                  <p> <span>Título da retrospectiva: </span> {retrospectiva.tituloRetrospectiva}</p>
                <p> <span>Data da Retrospectiva</span> {moment(retrospectiva.dataReuniao).format( 'DD/MM/YYYY')} </p>
              <p> <span>Status da Retrospectiva : </span> {retrospectiva.statusRetrospectivaEntity} </p>
                  {retrospectiva.itemDeRetrospectivaDTO.map((tes,index) => (
                    <div></div>
                  ))
                  }             

                  {
                  retrospectiva.statusRetrospectivaEntity === 'CRIADA' && 
                  <button style={{backgroundColor:'green' ,color:'white'}} onClick={() => startRetro(retrospectiva.idRetrospectiva)}>Iniciar</button>
                  }

                  {
                  retrospectiva.statusRetrospectivaEntity === 'EM_ANDAMENTO' && 
                  <button style={{backgroundColor:'red',color:'white'}} onClick={() => finishRetro(retrospectiva.idRetrospectiva)}>Encerrar</button>
                  }

                  {
                  retrospectiva.statusRetrospectivaEntity !== 'CRIADA' &&
                  <button onClick={() => getIdRetrospectiva(retrospectiva.idRetrospectiva)} >Go to Meeting</button>
                  }
            </div>
          </div>
          ))}
      
      </div>
      }
    </div>
  )
}

export default CardRetrospectiva;
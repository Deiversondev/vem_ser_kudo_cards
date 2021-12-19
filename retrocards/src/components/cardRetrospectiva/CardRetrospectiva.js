import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import styles from './CardRetrospectiva.module.css'




function CardRetrospectiva (){
  const{listRetrospectivas} = useContext(ListContext)

  const getIdRetrospectiva = (id) => {
    localStorage.setItem('IdRetrospectiva',id)
    window.location.href = '/retrospectiva'
    console.log(listRetrospectivas)
}

const startRetro = async (id) => {
  
  const {data} = api.put(`/retrospectiva/${id}/status?status=EM_ANDAMENTO`)
  localStorage.setItem('IdRetrospectiva',id)
  window.location.href = '/retrospectiva'
 
  console.log(data)
 
}



const finishRetro = async (id) => {

  const {data} = api.put(`/retrospectiva/${id}/status?status=ENCERRADA`)
  console.log(data)
  window.location.href ='/emails'
 
}

  return (
    <div>
   
        {listRetrospectivas.map((retrospectiva,index) => (
          <div className={styles.card_main} key={index}>
          {retrospectiva.idRetrospectiva}
          {retrospectiva.tituloRetrospectiva}
          {retrospectiva.dataReuniao}
          {retrospectiva.statusRetrospectivaEntity}
          {/* {retrospectiva.itemDeRetrospectivaDTO.map((tes,index) => (
            <div>{tes.descricao}</div>
          ))
} */}
          {/*Faltam os Itens da retrospectiva na API*/}
          {retrospectiva.statusRetrospectivaEntity === 'CRIADA' && <button style={{backgroundColor:'green' ,color:'white'}} onClick={() => startRetro(retrospectiva.idRetrospectiva)}>Iniciar</button>}
          {retrospectiva.statusRetrospectivaEntity === 'EM_ANDAMENTO' && <button className={styles.encerrar_btn} onClick={() => finishRetro(retrospectiva.idRetrospectiva)}>Encerrar</button>}

          <button onClick={() => getIdRetrospectiva(retrospectiva.idRetrospectiva)} >Go to Meeting</button>
        </div>
        ))}
     
    </div>
  )
}

export default CardRetrospectiva;
import React, { useEffect } from 'react'
import api from '../../api'
import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import ItemCard from '../../components/cardItemRetrospectiva/ItemCard'
import Loading from '../../components/loading/Loading'
import { AuthContext } from '../../context/AuthContext';
import { UserGroupContext } from '../../context/UserGroupContext'
import styles from '../retrospectiva/Retrospectiva.module.css'

function Retrospectiva() {

  const{retrospectiva,setRetrospectiva} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)
  const{getUserGroup, idGrupo, getlocalIdGrupo}= useContext(UserGroupContext)

  useEffect(async() =>{

    getMeeting()
    await getUserGroup()
    getlocalIdGrupo()
    
  },[])

  const goToCreateItems = () =>{
    window.location.href = '/createitems'
  }


  const getMeeting = async () =>{

    const idRetro = localStorage.getItem('IdRetrospectiva')
    setLoading(true)
    const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
    setLoading(false)
    console.log('Esse console log é referente a retrospectiva')
    setRetrospectiva(data)
      
  }


  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div className={styles.retrospectiva}>
        <h1>Retrospectivas:</h1>
        {
          retrospectiva && (
            retrospectiva.map((retro,index) => (
              <div key={index} className={styles.cardRetrospectiva} >
                <p><strong>ID da retrospectiva:</strong> {retro.idRetrospectiva}</p>
                <p><strong>STATUS: </strong>{retro.statusRetrospectivaEntity.replaceAll('_', ' ')}</p>
                
                <p><strong>Titulo da retrospectiva:</strong> {retro.tituloRetrospectiva}</p>
                {retrospectiva[0].itemDeRetrospectivaDTO.length === 0 ? <p>Não existem itens cadastrados</p> :  <ItemCard/>}
              
                {(idGrupo ==  2) && (retro.statusRetrospectivaEntity !== 'ENCERRADA') &&
                <button onClick={goToCreateItems}>Create Items</button>
        }
              </div>
            ))
          )  
        }
      </div>
      }
    </div>
  )
}

export default Retrospectiva

import React, { useEffect } from 'react'
import api from '../../api'
import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import ItemCard from '../../components/cardItemRetrospectiva/ItemCard'
import Loading from '../../components/loading/Loading'
import { AuthContext } from '../../context/AuthContext';

function Retrospectiva() {

  const{retrospectiva,setRetrospectiva} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)

  useEffect(() =>{

    getMeeting()
    
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
      <div>
        <h1>Retrospectiva</h1>
        {
          retrospectiva && (
            retrospectiva.map((retro,index) => (
              <div key={index}>
                <p>ID da retrospectiva: {retro.idRetrospectiva}</p>
                <p><strong>STATUS: </strong>{retro.statusRetrospectivaEntity}</p>
                
                <h2>Titulo da retrospectiva: {retro.tituloRetrospectiva}</h2>
                {retrospectiva[0].itemDeRetrospectivaDTO.length === 0 ? <p>Não existem itens cadastrados</p> :  <ItemCard/>}
              
                {retro.statusRetrospectivaEntity !== 'ENCERRADA' &&
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

import React, { useEffect } from 'react'
import api from '../api'
import { useContext } from "react";
import { ListContext } from "../context/ListContext"
import ItemCard from '../components/cardItemRetrospectiva/ItemCard';

function Retrospectiva() {

  const{retrospectiva,setRetrospectiva} = useContext(ListContext)

  useEffect(() =>{

    getMeeting()
    
  },[])


  const getRetro = async() => {
    const idRetro = localStorage.getItem('IdRetrospectiva')
    const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
    console.log('Esse console log é referente a retrospectiva')
    console.log(data)
    // setListItems(data)
  } 
  const goToCreateItems = () =>{
    window.location.href = '/createitems'
  }

  const deleteItem = async (id) => {
  await api.delete(`/item/${id}`)
  }

  const getMeeting = async () =>{
    const idRetro = localStorage.getItem('IdRetrospectiva')
    const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
    console.log('Esse console log é referente a retrospectiva')
    setRetrospectiva(data)
      
  }
  return (
    <div>
      <h1>Retrospectiva</h1>
      {

        retrospectiva && (
          retrospectiva.map((retro,index) => (
            <div key={index}>
              <p>ID da retrospectiva: {retro.idRetrospectiva}</p>
              <p><strong>STATUS: </strong>{retro.statusRetrospectivaEntity}</p>
              {/* <button onClick={startRetro}>Iniciar</button> */}
              <h2>Titulo da retrospectiva: {retro.tituloRetrospectiva}</h2>
              {retrospectiva[0].itemDeRetrospectivaDTO.length === 0 ? <p>Não há nenhum card aqui</p> :  <ItemCard/>}
             
            </div>
          ))
        )
              
        
      }
      <button onClick={goToCreateItems}>Create Items</button>
      <button onClick={() => getRetro()}>Meeting</button>
    </div>
  )
}

export default Retrospectiva

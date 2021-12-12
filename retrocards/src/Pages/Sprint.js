import { useEffect, useState } from "react";
import api from "../api";

function Sprint (){

  useEffect(()=>{

    getRetrospectiva()

  },[])

  const[listRetrospectivas, setListRetrospectivas] = useState([]) 

  const getRetrospectiva= async() =>{

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=${id}`)
    setListRetrospectivas(data)
    console.log(listRetrospectivas)
  }
  
  return(
    <div>
      <h1>Página Sprint</h1>
      <ul>
        {listRetrospectivas.map(retrospectiva => (
          <li>
          {retrospectiva.idRetrospectiva}
          {retrospectiva.idTitulo}
          {retrospectiva.dataReuniao}
          {retrospectiva.tipoStatus}
          {/*Faltam os Itens da retrospectiva na API*/}
          <button>Iniciar/concluir</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Sprint;
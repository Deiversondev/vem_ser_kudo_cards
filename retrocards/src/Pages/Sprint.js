import { useEffect, useState } from "react";
import api from "../api";
import CardRetrospectiva from "../components/cardRetrospectiva/CardRetrospectiva";

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
      <CardRetrospectiva/>
    </div>
    
  )
}

export default Sprint;
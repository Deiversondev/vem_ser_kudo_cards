import { useEffect, useContext } from "react";
import { ListContext } from "../context/ListContext";
import api from "../api";
import CardRetrospectiva from "../components/cardRetrospectiva/CardRetrospectiva";

function Sprint (){

  const{listRetrospectivas, setListRetrospectivas} = useContext(ListContext)

  useEffect(()=>{

    getRetrospectiva()

  },[])

  
  const setIdKudoBox = () => {

    const idSprint = localStorage.getItem('idSprint')

    localStorage.setItem('idSprint',idSprint)
    window.location.href = '/createkudobox'
  } 
 


  const getRetrospectiva= async() =>{

    // const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');
    const idSprint = localStorage.getItem('idSprint')

    const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=${idSprint}`)
    setListRetrospectivas(data)
    console.log(data)
  }
  
  return(
    <div>
      <h1>Página Sprint</h1>
      <button type="button" onClick={()=> setIdKudoBox()} >Criar nova Kudo Box</button>
      <CardRetrospectiva/>
    </div>
    
  )
}

export default Sprint;
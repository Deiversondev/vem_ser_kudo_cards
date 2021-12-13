import { useEffect, useContext } from "react";
import { ListContext } from "../context/ListContext";
import api from "../api";
import CardRetrospectiva from "../components/cardRetrospectiva/CardRetrospectiva";

function Sprint (){

  const{listRetrospectivas, setListRetrospectivas} = useContext(ListContext)

  useEffect(()=>{

    getRetrospectiva()

  },[])

  const irPagNovaKudoBox = () => {
    window.location.href='/createkudobox';
  }

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
      <button type="button" onClick={()=> irPagNovaKudoBox()} >Criar nova Kudo Box</button>
      <CardRetrospectiva/>
    </div>
    
  )
}

export default Sprint;
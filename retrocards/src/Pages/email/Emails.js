import {  useState, useContext } from "react";
import api from "../../api";
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import moment from "moment";


function Emails (){
  
  const[email, setEmail]= useState('')
  const[lista, setLista]= useState([])
  const{loading, setLoading}= useContext(AuthContext)

  const moment = require('moment');
  const today = moment();
  

  const cadastrarEmail =() => {
    setLista([...lista, (email)])
    let input = document.querySelector('input')
    input.value = '';
    setEmail('')
    
  }

  const deleteEmail = (ff) =>{
 
    setLista(lista.filter((email) => email !== ff))
    
  }

  // const statuRetroEncerrada = async() => {
  //   await api.put('/retrospectiva/9/status?status=ENCERRADA')
  // }

  const enviarEmail = async() => {
    let sure = window.confirm('Enviar e-mail?')
    if (sure) {
    const report = {
      assunto: "Relatório Retrspectiva",
      dataEnvio: today.format('YYYY-MM-DD'),
      emailDestinatario: lista.toString()
    }

    console.log(lista, report)
    
  try{

    const idRetrospectiva = localStorage.getItem('idRetrospectiva')
    setLoading(true)
    try{
      await api.post(`/email?idRetrospectiva=${idRetrospectiva}`, report)
      window.alert('Envio realizado com sucesso!')
    setLoading(false)
    }
    catch{
      alert('Houve uma falha nos servidores!')
    }

    setLista([])
   

    
    window.history.back()

  } catch(e){
    console.log(e)
  }
    console.log('função enviar e-mail chamada')
     
  }
  }
  console.log(lista);

  
  return(
    
    <div >
      {loading && <Loading/>}
      {!loading && 
      <div>
        <h1>Página emails</h1>
        {
          lista && lista.map(em =>(

          <div>
            <p>{em}   <button onClick={() => deleteEmail(em)}>Remove</button></p>
          </div>
          ))
        }
        <form>
      
          <div>
            <label htmlFor="inputEmail">Para:</label>
            <input type="email" onChange={e => setEmail(e.target.value)}/>
          </div>
         
          <button type="button" onClick={()=> cadastrarEmail()} >Add</button>
          <button type="submit" onClick={()=> enviarEmail()} >Enviar</button>
        </form>
      </div>
      }
    </div>
  );
}
export default Emails;
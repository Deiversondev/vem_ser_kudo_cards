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
    
  }


  const deleteEmail = (ff, e) =>{
    // e.preventDefault();
     setLista(lista.filter((email) => email !== ff))
    
      console.log(lista)
  }


  const enviarEmail = async() => {
  
    const report = {
      assunto: "Relatório Retrspectiva",
      dataEnvio: today.format('YYYY-MM-DD'),
      emailDestinatario: lista.toString()
    }
   

    console.log(lista, report)
    
  try{
    setLoading(true)
    const {data} =  await api.post('/email', report)
    setLoading(false)
  } catch(e){
    console.log(e)
  }
    console.log('função enviar e-mail chamada')
   
    
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
            <input type="text" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <small>Você pode adicionar múltiplos e-mails usando vírgula(',')</small>
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
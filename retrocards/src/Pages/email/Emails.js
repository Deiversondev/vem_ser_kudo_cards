import {  useState } from "react";
import api from "../../api";


function Emails (){
  
  const[email, setEmail]= useState('')
  const[lista, setLista]= useState([])
  


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
      assunto: "string",
      dataEnvio: "2021-12-16",
      emailDestinatario: lista.toString()
    }
   

    console.log(lista, report)
  try{
    const {data} =  await api.post('/email', report)
  } catch(e){
    console.log(e)
  }
    console.log('função enviar e-mail chamada')
   
    
  }
  console.log(lista);
  

  return(
    
    <div >

     
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
  );
}
export default Emails;
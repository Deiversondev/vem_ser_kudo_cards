import {  useEffect, useState } from "react";
import api from "../api";


function Emails (){
  
  // useEffect(()=>{
    
  //   aceitarMutiplosEmails()

  // },[])
  const[lista, setLista]= useState({assunto:'',dataEnvio:'2021-12-16', emailDestinatario:''})

  // const aceitarMutiplosEmails = () => {
  //   document.getElementById('emails').multiple = true;
  // }

  const enviarEmail = async() => {
    
    console.log('função enviar e-mail chamada')
    setLista({...lista, dataEnvio:'2021-12-16'})
    console.log(lista)
    await api.post('/email', lista)
    
  }

  return(
    
    <div >
      <h1>Página emails</h1>
      <form>
        <div>
          <label htmlFor="assunto">Assunto:</label>
          <input type="text" onChange={e => setLista({...lista, assunto:e.target.value})}/>
        </div>

        <div>
        <label htmlFor="destinatarios">Para:</label>
          <input type="email" onChange={e => setLista({...lista, emailDestinatario:e.target.value})}/>
        </div>

        <div>
          <small>Você pode adicionar múltiplos e-mails usando vírgula(',')</small>
        </div>

        <button type="submit" onClick={()=> enviarEmail()} >Enviar</button>

      </form>
    </div>
  );
}
export default Emails;
import {  useState } from "react";
import api from "../api";
function Emails (){
  
  const[email, setEmail]= useState('')
  const[lista, setLista]= useState([])
  const cadastrarEmail =() => {
    setLista([...lista, (email)])

  }


  const enviarEmail = async() => {
   const {data} =  await api.post('/email', lista)

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
    console.log(data)


  }
  console.log(lista);
  
  return(
    
    <div >
      <h1>Página emails</h1>
      <form>
        <div>
          <input type="email" onChange={e => setEmail(e.target.value)}/>
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
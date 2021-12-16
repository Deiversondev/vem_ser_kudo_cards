import {  useState } from "react";


function Emails (){
  
  const[email, setEmail]= useState('')
  const[lista, setLista]= useState([])


  function cadastrarEmail(){

    setLista([...lista, (email)])
    
  }

  console.log(lista);

  return(
    
    <div >
      <h1>Página emails</h1>
      <form>
        <div>
          <input type="e-mail" onChange={e => setEmail(e.target.value)}/>
        </div>
        <button type="button" onClick={()=> cadastrarEmail()} >Add</button>
      </form>
    </div>
  );
}
export default Emails;
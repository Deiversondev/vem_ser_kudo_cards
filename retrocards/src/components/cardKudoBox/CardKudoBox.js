import { useContext } from "react";
import { ListContext } from "../../context/ListContext"



function CardKudoBox (){

  const{listKudoBoxes} = useContext(ListContext)
  
  const goToKudoBox = (idKudoBox)=> {
    localStorage.setItem('idKudoBox', idKudoBox)
    window.location.href='/kudobox'
  }

  return (
    <div>
      <ul>
        {listKudoBoxes.map(kudoBox => (
          <li>
          {kudoBox.titulo}
          {kudoBox.dataLeitura}
          <button onClick={()=> goToKudoBox(kudoBox.idKudoBox)}>Abrir Kudo Box</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoBox;
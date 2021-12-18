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
          <div key={kudoBox.idKudoBox}>
            <li>
            {kudoBox.idKudoBox}
            {kudoBox.titulo}
            {kudoBox.dataLeitura}
            <button onClick={()=> goToKudoBox(kudoBox.idKudoBox)}>Abrir Kudo Box</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoBox;
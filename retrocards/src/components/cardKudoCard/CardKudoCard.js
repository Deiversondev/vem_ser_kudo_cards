import { useContext } from "react";
import { ListContext } from "../../context/ListContext"



function CardKudoCard (){

  const{listKudoCards} = useContext(ListContext)
  
  
  const goToKudoCard = (idKudoCard)=> {
    localStorage.setItem('idKudoCard', idKudoCard)
    window.location.href='/kudocard'
  }

  return (
    <div>
      <ul>
        {listKudoCards.map(kudoCard => (
          <li>
          {kudoCard.id}
          {kudoCard.titulo}
          {kudoCard.dataCriacao}
          {kudoCard.de}
          {kudoCard.para}
          <button onClick={()=> goToKudoCard(kudoCard.idKudoCard)}>Abrir Kudo Card</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoCard;
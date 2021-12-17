import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"




function CardKudoCard (){

  const{listKudoCards} = useContext(ListContext)
  
  
  const goToKudoCard = (idKudoCard)=> {
    localStorage.setItem('idKudoCard', idKudoCard)
    window.location.href='/kudocard'
  }

  const deleteKudoCard = async(idKudoCard) =>{

    console.log(idKudoCard)
    await api.delete(`/kudocard/${idKudoCard}`)
    window.location.reload()
  }

  return (
    <div>
      <ul>
        {listKudoCards.map(kudoCard => (
          <div key={kudoCard.idKudoCard}>
            <li>
            {kudoCard.idKudoCard}
            {kudoCard.titulo}
            {kudoCard.dataCriacao}
            {kudoCard.de}
            {kudoCard.para}
            <button onClick={()=> goToKudoCard(kudoCard.idKudoCard)}>Abrir Kudo Card</button>
            <button onClick={()=> deleteKudoCard(kudoCard.idKudoCard)}>Deletar Kudo Card</button>
            </li>
        </div>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoCard;
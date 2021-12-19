import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import Loading from '../loading/Loading'


function CardKudoCardEcerradoSprint(){

  const{listKudoCardsEncerradosSprint} = useContext(ListContext) 
  

  return (
    <div>
      <ul>
        {listKudoCardsEncerradosSprint.map(kudoCard => (
          <div key={kudoCard.idKudoCard}>
          <li>
          <p>Id: {kudoCard.idKudoCard}</p>
          <p>Título: {kudoCard.titulo}</p>
          <p>ID KudoBox: {kudoCard.idKudoBox}</p>
          <p>Data de Conclusão: {kudoCard.dataConclusao}</p>
          <p>{kudoCard.de? kudoCard.de : "Anônimo"}</p>
          <p>Para:{kudoCard.para}</p>
          <p>{kudoCard.descricao}</p>
          </li>
        </div>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoCardEcerradoSprint;
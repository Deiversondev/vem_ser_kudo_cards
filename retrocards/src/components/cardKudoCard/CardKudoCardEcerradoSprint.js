import { useContext } from "react";
import { ListContext } from "../../context/ListContext"



function CardKudoCardEcerradoSprint(){

  const{listKudoCardsEncerradosSprint} = useContext(ListContext); 
  

  return (
    <div>
      <ul>
        {listKudoCardsEncerradosSprint.map(kudoCard => (
          <div key={kudoCard.idKudoCard}>
          <li>
          <p>Id: {kudoCard.idKudoCard}</p>
          <p>Título: {kudoCard.titulo}</p>
          <p>De: {kudoCard.de? kudoCard.de : "Anônimo"}</p>
          <p>Para: {kudoCard.para}</p>
          <p>Descrição: {kudoCard.descricao}</p>
          <p>ID KudoBox: {kudoCard.kudoBoxDTO.idKudoBox}</p>
          <p>Data da Leitura: {kudoCard.kudoBoxDTO.dataLeitura}</p>
          </li>
        </div>
        ))}
      </ul>
    </div>
  );
}

export default CardKudoCardEcerradoSprint;
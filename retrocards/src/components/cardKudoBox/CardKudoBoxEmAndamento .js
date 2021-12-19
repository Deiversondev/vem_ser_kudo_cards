import { useContext } from "react";
import { ListContext } from "../../context/ListContext";



function CardKudoBoxEmAndamento (){

  const{listKudoBoxesEmAndamento} = useContext(ListContext);
  
  return (
    <div>
      <h3>KudoBoxes em andamento:</h3>
      <ul>
        {listKudoBoxesEmAndamento.map(kudoBox => (
          <div key={kudoBox.idKudoBox}>
            <li>
            {kudoBox.idKudoBox}
            {kudoBox.titulo}
            {kudoBox.idSprint}
            {kudoBox.dataLeitura}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoBoxEmAndamento;
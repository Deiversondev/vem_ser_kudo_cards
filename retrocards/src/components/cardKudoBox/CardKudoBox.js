import { useContext } from "react";
import { ListContext } from "../../context/ListContext"



function CardKudoBox (){

  const{listKudoBoxes} = useContext(ListContext)
  

  return (
    <div>
      <ul>
        {listKudoBoxes.map(kudoBox => (
          <li>
          {kudoBox.titulo}
          {kudoBox.dataLeitura}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CardKudoBox;
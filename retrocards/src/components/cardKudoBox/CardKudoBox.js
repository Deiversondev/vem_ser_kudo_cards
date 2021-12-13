import { useContext } from "react";
import { ListContext } from "../../context/ListContext"



function CardKudoBox (){

  const{listKudoBoxes, setListKudoBoxes} = useContext(ListContext)

  // const setSprintId = (id) => {
  //   localStorage.setItem('idSprint',id)
  //   window.location.href = '/sprint'
  // } 

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
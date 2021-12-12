import { useContext } from "react";
import { ListContext } from "../../context/ListContext"


function CardSprint (){
  const{listSprints} = useContext(ListContext)
  return (
    <div>
      <ul>
        {listSprints.map((sprint )=>(
          <div>
            <li key= {sprint.idSprint}>
              {sprint.idSprint}
              {sprint.titulo}
              {sprint.dataConclusao}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardSprint;
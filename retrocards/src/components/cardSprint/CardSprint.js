import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
// import {AuthContext} from '../../context/AuthContext'
import api from "../../api";

function CardSprint (){
  const{listSprints} = useContext(ListContext)
  // const {idSprint,setIdSprint} = useContext(AuthContext)

   const goToString= (id) =>{
    
     window.location.href = `http://localhost:3000/sprint?id=${id}`
  
  }
  
  
  return (
    <div>
      <ul>
        {listSprints.map(sprint =>(
          <div>
            <li key= {sprint.idSprint}>
              {sprint.idSprint}
              {sprint.titulo}
              {sprint.dataConclusao}
              <button onClick={() => goToString(sprint.idSprint)}>Go to String</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardSprint;
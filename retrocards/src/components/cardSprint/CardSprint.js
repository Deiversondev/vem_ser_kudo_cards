import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import {AuthContext} from '../../context/AuthContext'
import api from "../../api";

function CardSprint (){
  const{listSprints} = useContext(ListContext)
  const {idSprint,setIdSprint} = useContext(AuthContext)

  async function getMeeting(id){
    const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=${id}`)
    console.log(data)
  }


  return (
    <div>
      <ul>
        {listSprints.map((sprint )=>(
          <div>
            <li key= {sprint.idSprint}>
              {sprint.idSprint}
              {sprint.titulo}
              {sprint.dataConclusao}
              <button onClick={() => setIdSprint(sprint.idSprint)}>set</button>
              <button onClick={() => console.log(idSprint)}>print</button>
              <button onClick={() => getMeeting(idSprint)}>Get Meeting</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardSprint;
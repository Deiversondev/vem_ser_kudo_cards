import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import api from "../../api";

function CardSprint (){
  const{listSprints} = useContext(ListContext)

  async function getMeeting(id){
    const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=${id}`)
    console.log(data)
  }

  const setIdSprint = (id) =>{
 localStorage.setItem('idSprint' , id)
 window.location.href = '/createretrospectiva'
    
  }

  let idTest = localStorage.getItem('idSprint')


  return (
    <div>
      <ul>
        {listSprints.map(sprint =>(
          <div>
            <li key= {sprint.idSprint}>
              {sprint.idSprint}
              {sprint.titulo}
              {sprint.dataConclusao}
              <button onClick={() => setIdSprint(sprint.idSprint)}>set</button>
              <button onClick={() => console.log(idTest)}>print</button>
              <button onClick={() => getMeeting(idTest)}>Get Meeting</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CardSprint;
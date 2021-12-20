import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import styles from './CardSprint.module.css'


function CardSprint (){
  const{listSprints} = useContext(ListContext)

  const setSprintId = (id) => {
    localStorage.setItem('idSprint',id)
    window.location.href = '/sprint'
  } 
  
  
  return (
    <div className={styles.main} >
   <h3>Sprints</h3>
       <div className={styles.container} >
       {listSprints.map(sprint =>(
          <div key= {sprint.idSprint}>
            <div className={styles.sprint_main}>
              <div>
             <p><strong>ID: </strong> {sprint.idSprint}</p>
              <p><strong>Título: </strong> {sprint.titulo}</p>
              <p><strong>Data: </strong>{sprint.dataConclusao}</p>
              </div>
              <button onClick={() => setSprintId(sprint.idSprint)}>Go to Sprint</button>
            </div>
          </div>
        ))}
       </div>
    
    </div>
  )
}

export default CardSprint;
import { useContext } from "react";
import { ListContext } from "../../context/ListContext"



function CardRetrospectiva (){
  const{listRetrospectivas} = useContext(ListContext)
  const getIdRetrospectiva = (id) => {
    localStorage.setItem('IdRetrospectiva',id)
    window.location.href = '/createitems'
}
  return (
    <div>
      <ul>
        {listRetrospectivas.map(retrospectiva => (
          <li>
          {retrospectiva.idRetrospectiva}
          {retrospectiva.idTitulo}
          {retrospectiva.dataReuniao}
          {retrospectiva.tipoStatus}
          {/*Faltam os Itens da retrospectiva na API*/}
          <button>Iniciar/concluir</button>
          <button onClick={() => getIdRetrospectiva(retrospectiva.idRetrospectiva)} >Set_ID</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CardRetrospectiva;
import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"




function CardRetrospectiva (){
  const{listRetrospectivas} = useContext(ListContext)

  const getIdRetrospectiva = (id) => {
    localStorage.setItem('IdRetrospectiva',id)
    window.location.href = '/retrospectiva'
    console.log(listRetrospectivas)
}

const startRetro = async (id) => {
  
  const {data} = api.put(`/retrospectiva/${id}/status?status=EM_ANDAMENTO`)
  localStorage.setItem('IdRetrospectiva',id)
  window.location.href = '/retrospectiva'
 
  console.log(data)
 
}



const finishRetro = async (id) => {

  const {data} = api.put(`/retrospectiva/${id}/status?status=ENCERRADA`)
  console.log(data)
  window.location.href ='/emails'
 
}

  return (
    <div>
      <ul>
        {listRetrospectivas.map((retrospectiva,index) => (
          <li key={index}>
          {retrospectiva.idRetrospectiva}
          {retrospectiva.tituloRetrospectiva}
          {retrospectiva.dataReuniao}
          {retrospectiva.statusRetrospectivaEntity}
          {retrospectiva.itemDeRetrospectivaDTO.map((tes,index) => (
            <div>{tes.descricao}</div>
          ))
}
          {/*Faltam os Itens da retrospectiva na API*/}
          {retrospectiva.statusRetrospectivaEntity === 'CRIADA' && <button style={{backgroundColor:'green' ,color:'white'}} onClick={() => startRetro(retrospectiva.idRetrospectiva)}>Iniciar</button>}
          {retrospectiva.statusRetrospectivaEntity === 'EM_ANDAMENTO' && <button style={{backgroundColor:'red',color:'white'}} onClick={() => finishRetro(retrospectiva.idRetrospectiva)}>Encerrar</button>}

          <button onClick={() => getIdRetrospectiva(retrospectiva.idRetrospectiva)} >Go to Meeting</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CardRetrospectiva;
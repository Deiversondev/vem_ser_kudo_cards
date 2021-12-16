import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"




function CardRetrospectiva (){
  const{listRetrospectivas} = useContext(ListContext)

  const getIdRetrospectiva = (id) => {
    localStorage.setItem('IdRetrospectiva',id)
    window.location.href = '/retrospectiva'
}

const startRetro = async (id) => {
  
  const {data} = api.put(`/retrospectiva/${id}/status?status=EM_ANDAMENTO`)
  
  console.log(data)
 
}

const test = async () => {
  for(let i = 0; i < listRetrospectivas.length ; i++){
    if (listRetrospectivas[i].statusRetrospectivaEntity === 'EM_ANDAMENTO') {
      console.log('Há uma reunião em andamento')
    }
    else {
      console.log('Não há nehuma reunião em andamento')
    }
  }
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
          {/*Faltam os Itens da retrospectiva na API*/}
          {retrospectiva.statusRetrospectivaEntity === 'CRIADA' && <button style={{backgroundColor:'green' ,color:'white'}} onClick={() => startRetro(retrospectiva.idRetrospectiva)}>Iniciar</button>}
          <button style={{backgroundColor:'red',color:'white'}} onClick={() => finishRetro(retrospectiva.idRetrospectiva)}>Encerrar</button>
          <button onClick={test}>Test</button>
          <button onClick={() => getIdRetrospectiva(retrospectiva.idRetrospectiva)} >Go to Meeting</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CardRetrospectiva;
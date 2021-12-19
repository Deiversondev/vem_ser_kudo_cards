import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'




function CardRetrospectiva (){

  const{listRetrospectivas} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)

  const getIdRetrospectiva = (id) => {
    localStorage.setItem('IdRetrospectiva',id)
    window.location.href = '/retrospectiva'
    console.log(listRetrospectivas)
}

const startRetro = async (id) => {

  setLoading(true)
  const {data} = api.put(`/retrospectiva/${id}/status?status=EM_ANDAMENTO`)
  setLoading(false)
  window.location.reload()
  localStorage.setItem('IdRetrospectiva',id)
  window.location.href = '/retrospectiva'
 
  console.log(data)
 
}

const finishRetro = async (id) => {

  setLoading(true)
  const {data} = api.put(`/retrospectiva/${id}/status?status=ENCERRADA`)
  setLoading(false)
  
  window.location.href ='/emails'
 
}

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <ul>
          {listRetrospectivas.map((retrospectiva) => (
            <li key={retrospectiva.idRetrospectiva}>
            {retrospectiva.idRetrospectiva}
            {retrospectiva.tituloRetrospectiva}
            {retrospectiva.dataReuniao}
            {retrospectiva.statusRetrospectivaEntity}
            {retrospectiva.itemDeRetrospectivaDTO.map((tes,index) => (
              <div>{tes.descricao}</div>
            ))
            }             

            {
            retrospectiva.statusRetrospectivaEntity === 'CRIADA' && 
            <button style={{backgroundColor:'green' ,color:'white'}} onClick={() => startRetro(retrospectiva.idRetrospectiva)}>Iniciar</button>
            }

            {
            retrospectiva.statusRetrospectivaEntity === 'EM_ANDAMENTO' && 
            <button style={{backgroundColor:'red',color:'white'}} onClick={() => finishRetro(retrospectiva.idRetrospectiva)}>Encerrar</button>
            }

            {
            retrospectiva.statusRetrospectivaEntity !== 'CRIADA' &&
            <button onClick={() => getIdRetrospectiva(retrospectiva.idRetrospectiva)} >Go to Meeting</button>
            }
          </li>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default CardRetrospectiva;
import { useContext } from "react";
import api from "../../api";
import { ListContext } from "../../context/ListContext"
import { AuthContext } from "../../context/AuthContext";
import Loading from "../loading/Loading";



function CardKudoBox (){

  const{listKudoBoxes} = useContext(ListContext)
  const{loading, setLoading}= useContext(AuthContext)
  
  const goToKudoBox = (idKudoBox)=> {
    localStorage.setItem('idKudoBox', idKudoBox)
    window.location.href='/kudobox'
  }

  const startKudoBox = async(idKudoBox)=> {
    
    setLoading(true)
    await api.put(`/kudobox/${idKudoBox}/status?status=EM_ANDAMENTO`)
    setLoading(false)

    window.location.reload()
  }

  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
        <ul>
          {listKudoBoxes.map(kudoBox => (
            <div key={kudoBox.idKudoBox}>
              <li>
              {kudoBox.idKudoBox}
              {kudoBox.titulo}
              {kudoBox.statusKudoBoxEntity}
              {kudoBox.dataLeitura}
              <button onClick={()=> startKudoBox(kudoBox.idKudoBox)}>Iniciar Kudo Box</button>
              <button onClick={()=> goToKudoBox(kudoBox.idKudoBox)}>Abrir Kudo Box</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default CardKudoBox;
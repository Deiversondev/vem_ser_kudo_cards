import api from "../../api";
import { useEffect, useContext } from "react";
import { AuthContext } from '../../context/AuthContext'
import Loading from '../../components/loading/Loading'
import { ListContext } from "../../context/ListContext"
import CardKudoCardsUsers from "../../components/cardKudoCard/CardKudoCardsUsers";


function KudoCardsUsuario(){

  useEffect(()=> {
    
    getKudoCardsUsuario()

  },[])

  const{loading, setLoading}= useContext(AuthContext)
  const {listKudoCardsUser, setListKudoCardsUser} = useContext(ListContext)

  const getKudoCardsUsuario = async() => {
    setLoading(true)
    const{data} = await api.get('/kudocard/find-by-user')
    setLoading(false)
    setListKudoCardsUser(data)
  }


  return(
    <div>
      {loading && <Loading/>}
      {!loading && 
      <div>
      <h1>Meus KudoCards</h1>
      {listKudoCardsUser.length !== 0 && <CardKudoCardsUsers/>}
      {listKudoCardsUser.length === 0 && <p>Você não mandou nenhum KudoCard</p>}
      </div>
      }
    </div>
  );
}

export default KudoCardsUsuario;
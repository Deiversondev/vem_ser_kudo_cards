import React , {useEffect}from 'react'
import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import api from '../../api';
import { UserGroupContext } from '../../context/UserGroupContext'
import styles from './ItemCard.module.css'

function ItemCard() {

  const{retrospectiva,setRetrospectiva} = useContext(ListContext)
  const{getUserGroup, idGrupo, getlocalIdGrupo}= useContext(UserGroupContext)

  useEffect(async() =>{

    getMeeting()
    await getUserGroup()
    getlocalIdGrupo()
      
  },[])


  const getRetro = async() => {
    const idRetro = localStorage.getItem('IdRetrospectiva')
    const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
    console.log('Esse console log é referente a retrospectiva')
    console.log(data)
    
  } 
  const goToCreateItems = () =>{
    window.location.href = '/createitems'
  }

  const deleteItem = async (id) => {
    let sure = window.confirm('Você realmente deseja excluir esse item?')
    if (sure) {
      await api.delete(`/item/${id}`)
      
      window.location.reload()
      setTimeout(() =>{
        alert(`Item de ID número ${id} foi excluido com sucesso`)
      },500)
      
    }
    else{
      alert('Ação de excluir cancelada com sucesso!')
    }

  
  }

  const getMeeting = async () =>{
    const idRetro = localStorage.getItem('IdRetrospectiva')
    const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
    console.log('Esse console log é referente a retrospectiva')
    setRetrospectiva(data)
      
  }
  

return (
    <div>
      
      {

        retrospectiva && (
          retrospectiva.map((retro,index) => (
            <div className={styles.card_container}   key={index}>

              {
                retro.itemDeRetrospectivaDTO.map((item,index )=> (
                  <div className={styles.card_main} key={index}>
                    <h2>Item Número: {index + 1}</h2>
                    
                    <p> <span>Titulo do Item: </span> {item.titulo}</p>

                    <p> <span>ID do Item: </span> {item.idItemRetrospectiva}</p>

                    <p> <span>Tipo:</span>  {item.tipo}</p>

                    <p><span>Descrição: </span>{item.descricao}</p>
                    {(idGrupo ==  2) &&
                    <button  onClick={() => deleteItem(item.idItemRetrospectiva)}>Deletar</button>
                    }
                  </div>
                ))
              }
            </div>
          ))
        )
      }
    </div>
  )
}

export default ItemCard

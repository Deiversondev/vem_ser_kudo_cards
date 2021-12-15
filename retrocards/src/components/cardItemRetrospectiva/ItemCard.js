import React , {useEffect}from 'react'
import { useContext } from "react";
import { ListContext } from "../../context/ListContext"
import api from '../../api';

function ItemCard() {

    const{retrospectiva,setRetrospectiva} = useContext(ListContext)

    useEffect(() =>{

        getMeeting()
        
      },[])
    
    
      const getRetro = async() => {
        const idRetro = localStorage.getItem('IdRetrospectiva')
        const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
        console.log('Esse console log é referente a retrospectiva')
        console.log(data)
        // setListItems(data)
      } 
      const goToCreateItems = () =>{
        window.location.href = '/createitems'
      }
    
      const deleteItem = async (id) => {
      await api.delete(`/item/${id}`)
      }
    
      const getMeeting = async () =>{
        const idRetro = localStorage.getItem('IdRetrospectiva')
        const {data} = await api.get(`/retrospectiva/listar-por-id-retro?idRetro=${idRetro}`)
        console.log('Esse console log é referente a retrospectiva')
        setRetrospectiva(data)
          
      }

    return (
        <div>
          {/* <h1>Retrospectiva</h1> */}
          {
    
            retrospectiva && (
              retrospectiva.map((retro,index) => (
                <div key={index}>

                  {
                    retro.itemDeRetrospectivaDTO.map((item,index )=> (
                      <div key={index}>
                        <h2>Item Número: {index + 1}</h2>
                        
                        <p><strong>Titulo do Item:</strong>{item.titulo}</p>
                        <p><strong>ID do Item: {item.idItemRetrospectiva}</strong></p>
                        <p><strong>Tipo: </strong> {item.tipo}</p>
                        <p><strong>Descrição: </strong>{item.descricao}</p>
                        <button style={{backgroundColor:'red',color:'white'}}onClick={() => deleteItem(item.idItemRetrospectiva)}>Deletar</button>
                        <hr />
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

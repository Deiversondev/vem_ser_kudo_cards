import React from 'react'
import api from '../api'
import { useContext } from "react";
import { ListContext } from "../context/ListContext"

function Items() {

    const{listItems,setListItems} = useContext(ListContext)


    const getRetro = async() => {
        const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=20`)
        console.log(data)
        setListItems(data)
    }
    const getMeeting = async () =>{
        const {data} = await api.get(`/retrospectiva/{idRetrospectiva}?idTitulo=62`)
        console.log('Esse console log é referente a retrospectiva')
        console.log(data)
    }
    return (
        <div>
            {
                listItems && listItems.map(item =>(
                    <div>
                       <span>ID número: {item.idRetrospectiva}</span>
                        <h3>Título da retrospectiva: {item.tituloRetrospectiva}</h3>
                        <h5>Data da reunião: {item.dataReuniao}</h5>
                       
                      
                    </div>
                ))
            }
            <button onClick={getRetro}>Get it Baaaabe</button>
            <button onClick={() => console.log(listItems)}>List</button>
            <button onClick={() => getMeeting()}>Meeting</button>
        </div>
    )
}

export default Items

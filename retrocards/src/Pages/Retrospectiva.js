import React, { useEffect } from 'react'
import api from '../api'
import { useContext } from "react";
import { ListContext } from "../context/ListContext"

function Retrospectiva() {

    const{retrospectiva,setRetrospectiva} = useContext(ListContext)

    useEffect(() =>{
        getMeeting()
    },[])


    const getRetro = async() => {
        const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=20`)
        console.log(data)
        // setListItems(data)
    }
    const getMeeting = async () =>{
        const idRetro = localStorage.getItem('IdRetrospectiva')
        const {data} = await api.get(`/retrospectiva/{idRetrospectiva}?idTitulo=${idRetro}`)
        console.log('Esse console log é referente a retrospectiva')
        setRetrospectiva(data)
        console.log(data)
    }
    return (
        <div>
            <h1>Retrospectiva</h1>
            {
                
                    <div>
                       <span>ID número: {retrospectiva.idRetrospectiva}</span>
                        <h3>Título da retrospectiva: {retrospectiva.tituloRetrospectiva}</h3>
                        <h5>Data da reunião: {retrospectiva.dataReuniao}</h5>
                    </div>
              
            }
            {/* <button onClick={getRetro}>Get it Baaaabe</button>
            <button onClick={() => console.log(retrospectiva)}>List</button> */}
            <button onClick={() => getMeeting()}>Meeting</button>
        </div>
    )
}

export default Retrospectiva

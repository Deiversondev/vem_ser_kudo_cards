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
    const goToCreateItems = () =>{
        window.location.href = '/createitems'
    }

    const getMeeting = async () =>{
        const idRetro = localStorage.getItem('IdRetrospectiva')
        const {data} = await api.get(`/retrospectiva/id-retro?idRetro=${idRetro}`)
        console.log('Esse console log é referente a retrospectiva')
        setRetrospectiva(data)
        console.log(data)
    }
    return (
        <div>
            <h1>Retrospectiva</h1>
            {

                retrospectiva && (
                    retrospectiva.map(retro => (
                        <div>
                            <p>ID da retrospectiva: {retro.idRetrospectiva}</p>
                            <h2>Titulo da retrospectiva: {retro.tituloRetrospectiva}</h2>
                            {
                                retro.itemDeRetrospectivaDTO.map(item => (
                                    <div>
                                        <hr />
                                        <p><strong>Titulo do card:</strong>{item.titulo}</p>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                )
                    
              
            }
            <button onClick={goToCreateItems}>Create Items</button>
            {/* <button onClick={getRetro}>Get it Baaaabe</button>
            <button onClick={() => console.log(retrospectiva)}>List</button> */}
            <button onClick={() => getMeeting()}>Meeting</button>
        </div>
    )
}

export default Retrospectiva

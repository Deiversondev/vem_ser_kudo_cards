import {AuthContext} from '../context/AuthContext'
import { useContext, useEffect } from "react";
import api from '../api';



function SprintsPage() {

    let idTest = localStorage.getItem('idSprint')
    useEffect(()=>{
        getMeeting(idTest)
    },[])

    const {retrospectivas,setRetrospectivas} = useContext(AuthContext)

    // let idTest = localStorage.getItem('idSprint')
    async function getMeeting(id){
        const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=${id}`)
        setRetrospectivas(data)
        console.log(data)
        console.log(retrospectivas)
      }

    return (
        <div>
            <h1>Test</h1>

            {
                retrospectivas && (
                    retrospectivas.map(reuniao =>(
                        <div>
                            reuniao
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default SprintsPage

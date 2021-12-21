import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const UserGroupContext = createContext();


function UserGroupProvider ({children}) {

  useEffect(()=>{

    recuperarUsuario()

  },[])

  const[idUser, setIdUser] = useState('')
  const[groupUser, setGroupUser] = useState('')

  const recuperarUsuario = async() => {

    const{data} = await api.get('/usuario/recuperar')
    setIdUser(data.idUsuario)

  }

  const getGrupoUsuario = async() => {
    
    const{data} = await api.get('/usuario')

    data.map(e => (

      e.idUsuario === idUser && 
      setGroupUser(e.grupos[0].idGrupo)
  
    ))
    
    
  }

  return(
    
    <UserGroupContext.Provider 
    value={{idUser, 
    setIdUser, 
    groupUser, 
    setGroupUser, 
    recuperarUsuario,
    getGrupoUsuario
     }}>
      {children}
    </UserGroupContext.Provider>
  )
}

export { UserGroupContext, UserGroupProvider };
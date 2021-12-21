import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const UserGroupContext = createContext();


function UserGroupProvider ({children}) {

  const[idGrupo, setIdGrupo] = useState(0)

  const getUserGroup = async() => {
    
    const{data} = await api.get('/usuario/listar-por-grupo')
    localStorage.setItem('idGrupo', data[0].grupos[0].idGrupo)
  }

  const getlocalIdGrupo = async()=>{
    console.log('função get id grupo foi chamada')
    await setIdGrupo(localStorage.getItem('idGrupo'));

  }

  return(
    
    <UserGroupContext.Provider value={{ getUserGroup, idGrupo, setIdGrupo, getlocalIdGrupo }}>
      {children}
    </UserGroupContext.Provider>
  )
}

export { UserGroupContext, UserGroupProvider };
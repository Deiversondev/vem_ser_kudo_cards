import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const UserGroupContext = createContext();


function UserGroupProvider ({children}) {

  const[idGrupo, setIdGrupo] = useState(0)

  const getUserGroup = async() => {
    
    const{data} = await api.get('/usuario/listar-por-grupo')
    localStorage.setItem('idGrupo', data[0].grupos[0].idGrupo)
  }

  return(
    
    <UserGroupContext.Provider value={{ getUserGroup, idGrupo, setIdGrupo }}>
      {children}
    </UserGroupContext.Provider>
  )
}

export { UserGroupContext, UserGroupProvider };
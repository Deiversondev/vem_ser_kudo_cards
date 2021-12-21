import React, { createContext, useEffect, useState } from "react";
import api from "../api";

const UserGroupContext = createContext();


function UserGroupProvider ({children}) {

//   // useEffect(()=>{

//   //   // recuperarUsuario()

//   // },[])

//   const[groupUser, setGroupUser] = useState('')

  

//   const getGrupoUsuario = async(idUser) => {

    
//     const{data} = await api.get('/usuario')

//     data.map(e => (

//       e.idUsuario === idUser && 
//       setGroupUser(e.grupos[0].idGrupo)
  
//     ))
    
//     console.log('Grupo do usuário:', groupUser)
//   }

  return(
    <h4>olá</h4>
    
    // <UserGroupContext.Provider 
    // value={{
    // // idUser, 
    // // setIdUser, 
    // groupUser, 
    // setGroupUser, 
    // // recuperarUsuario,
    // getGrupoUsuario
    
    // }}>
    //   {children}
    // </UserGroupContext.Provider>
  )
}

export { UserGroupContext, UserGroupProvider };
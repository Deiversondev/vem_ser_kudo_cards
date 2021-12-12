import React, { createContext, useEffect, useState } from "react";
import api from "../api";


const AuthContext = createContext({});

function AuthProvider ({children}) {
  
  const[auth, setAuth] = useState(false)
  const[loading, setLoading] = useState(true)
  const [idSprint, setIdSprint] = useState(0)
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      setAuth(true)
    }
      setLoading(false)
  },[])


  const handleLogout= async() =>  {
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization']= '';
    window.location.href = '/login'
    setAuth(false)
  } 
  
  if(loading){
   return(<h1>Loading...</h1>)
  }
  return(
    <AuthContext.Provider value={{auth, setAuth, handleLogout, idSprint,setIdSprint}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};
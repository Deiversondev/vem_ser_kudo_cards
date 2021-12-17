import React, { createContext, useEffect, useState } from "react";
import api from "../api";



const AuthContext = createContext({});

function AuthProvider ({children}) {
  
  const[auth, setAuth] = useState(false)
  const[loading, setLoading] = useState(false)
  const [idSprint, setIdSprint] = useState(0)
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      setAuth(true)
      
    }
  },[])


  const handleLogout= async() =>  {
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization']= '';
    window.location.href = '/login'
    setAuth(false)
  } 
  
  return(
    <AuthContext.Provider value={{auth, setAuth, loading, setLoading, handleLogout, idSprint,setIdSprint}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};
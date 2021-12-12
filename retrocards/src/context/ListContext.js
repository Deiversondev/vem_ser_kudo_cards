import React, { createContext, useEffect, useState } from "react";
import api from "../api";


const ListContext = createContext({});

function ListProvider ({children}) {
  const[listSprints, setListSprints] = useState([])
  const[listRetrospectivas, setListRetrospectivas] = useState([]) 

  return(
    <ListContext.Provider value={{
      listSprints, 
      setListSprints, 
      listRetrospectivas, 
      setListRetrospectivas
    }}>

      {children}
      
    </ListContext.Provider>
  );
}

export {ListContext, ListProvider};
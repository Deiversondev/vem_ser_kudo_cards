import React, { createContext, useEffect, useState } from "react";
import api from "../api";


const ListContext = createContext({});

function ListProvider ({children}) {
  const[listSprints, setListSprints] = useState([])
  const[listRetrospectivas, setListRetrospectivas] = useState([]) 
  const [listItems,setListItems] = useState([])

  return(
    <ListContext.Provider value={{
      listSprints, 
      setListSprints, 
      listRetrospectivas, 
      setListRetrospectivas,
      listItems,
      setListItems
    }}>

      {children}
      
    </ListContext.Provider>
  );
}

export {ListContext, ListProvider};
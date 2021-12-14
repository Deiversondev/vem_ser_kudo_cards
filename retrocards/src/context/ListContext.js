import React, { createContext, useState } from "react";



const ListContext = createContext({});

function ListProvider ({children}) {
  const[listSprints, setListSprints] = useState([])
  const[listRetrospectivas, setListRetrospectivas] = useState([]) 
  const [listItems,setListItems] = useState([])
  const[listKudoBoxes, setListKudoBoxes] = useState([]) 

  return(
    <ListContext.Provider value={{
      listSprints, 
      setListSprints, 
      listRetrospectivas, 
      setListRetrospectivas,
      listKudoBoxes, 
      setListKudoBoxes,
      listItems,
      setListItems
    }}>

      {children}
      
    </ListContext.Provider>
  );
}

export {ListContext, ListProvider};
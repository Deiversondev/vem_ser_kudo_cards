import React, { createContext, useState } from "react";



const ListContext = createContext({});

function ListProvider ({children}) {
  const[listSprints, setListSprints] = useState([])
  const[listRetrospectivas, setListRetrospectivas] = useState([]) 
  const [listItems,setListItems] = useState([])
  const [retrospectiva,setRetrospectiva] = useState([])
  const[listKudoBoxes, setListKudoBoxes] = useState([]) 
  const[listKudoCards, setListKudoCards] = useState([]) 
  const[detalheKudoCard, setDetalheKudoCard] = useState([]) 

  return(
    <ListContext.Provider value={{
      listSprints, 
      setListSprints, 
      listRetrospectivas, 
      setListRetrospectivas,
      listKudoBoxes, 
      setListKudoBoxes,
      listItems,
      setListItems,
      retrospectiva,
      setRetrospectiva,
      listKudoCards, 
      setListKudoCards,
      detalheKudoCard, 
      setDetalheKudoCard
    }}>

      {children}
      
    </ListContext.Provider>
  );
}

export {ListContext, ListProvider};
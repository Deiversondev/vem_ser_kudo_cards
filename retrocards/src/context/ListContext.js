import React, { createContext, useEffect, useState } from "react";
import api from "../api";


const ListContext = createContext({});

function ListProvider ({children}) {
  const[listSprints, setListSprints] = useState([])

  return(
    <ListContext.Provider value={{listSprints, setListSprints}}>
      {children}
    </ListContext.Provider>
  );
}

export {ListContext, ListProvider};
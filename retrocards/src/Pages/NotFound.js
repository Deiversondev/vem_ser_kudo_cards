import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";

const NotFound = ()=>{

  useEffect(()=>{
    setTimeout(() => {
      setTexto(<h1>Page not Found</h1>)
    }, 1000);
  },[])

  const[texto, setTexto] = useState(<Loading/>)

  return(
    <div className='containerContent'>
      {texto}
    </div>
  )
}

export default NotFound;
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Header = () =>{

  const{handleLogout} = useContext(AuthContext)
  return(
      <header>
        <button type='button' onClick={()=> handleLogout()}>Sair</button>
      </header>
  );
}

export default Header;
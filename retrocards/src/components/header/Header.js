import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Header = () =>{

  const{handleLogout} = useContext(AuthContext)
  const goBack = () => {
    window.history.back()
  }
  return(
      <header>
        <button type='button' onClick={()=> goBack()}>Voltar</button>
        <button type='button' onClick={()=> handleLogout()}>Sair</button>
      </header>
  );
}

export default Header;
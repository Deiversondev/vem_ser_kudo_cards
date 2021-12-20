import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import styles from './Header.module.css'

const Header = () =>{

  const{handleLogout} = useContext(AuthContext)
  const goBack = () => {
    window.history.back()
  }
  const localToken = localStorage.getItem('token')
  
  return(
      <header>
        {localToken &&
        <div className={styles.btns}>
          <button type='button' onClick={()=> goBack()}>Voltar</button>
          <button type='button' onClick={()=> handleLogout()}>Sair</button>
        </div>
        }
      </header>
  );
}

export default Header;
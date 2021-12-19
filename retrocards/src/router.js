import { 
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import CreateSprint from './Pages/sprint/CreateSprint';
import CreateRetrospectiva from './Pages/retrospectiva/CreateRetrospectiva';
import CreateKudoCards from './Pages/kudoCard/CreateKudoCards';
import CreateKudoBox from './Pages/kudoBox/CreateKudoBox';
import CreateItems from './Pages/Itens/CreateItems';
import Login from './Pages/login/Login';
import InitialPage from './Pages/initialPage/InitialPage';
import Sprint from './Pages/sprint/Sprint';
import Retrospectiva from './Pages/retrospectiva/Retrospectiva';
import KudoBox from './Pages/kudoBox/KudoBox';
import KudoCard from './Pages/kudoCard/KudoCard';
import Emails from './Pages/email/Emails';



function Routers (){
  const{auth, setAuth} = useContext(AuthContext)

  const localToken = localStorage.getItem('token')
  
  useEffect (()=>{

    if (localToken){
      setAuth(true)
    }
  
  },[])

  return(
    <BrowserRouter>
      {auth? 
      <Routes>
        <Route path='/initialpage' element={<InitialPage/>}/>
        <Route path='/createsprint' element={<CreateSprint/>}/>
        <Route path='/sprint' element={<Sprint/>}/>
        <Route path='/kudobox' element={<KudoBox/>}/>
        <Route path='/kudocard' element={<KudoCard/>}/>
        <Route path='/createretrospectiva' element={<CreateRetrospectiva/>}/>
        <Route path='/createkudocards' element={<CreateKudoCards/>}/>
        <Route path='/createkudobox' element={<CreateKudoBox/>}/>
        <Route path='/createitems' element={<CreateItems/>}/>
        <Route path='/retrospectiva' element={<Retrospectiva/>}/>
        <Route path='/emails' element={<Emails/>}/>
        <Route path='/*' element={<Login/>}/>
      </Routes>
      :
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<Login/>}/>
      </Routes>
      }
      
    </BrowserRouter>    

  )
}

export default Routers;
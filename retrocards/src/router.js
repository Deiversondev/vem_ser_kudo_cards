import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
  
} from 'react-router-dom';

import CreateSprint from './Pages/CreateSprint';
import CreateRetrospectiva from './Pages/CreateRetrospectiva';
import CreateKudoCards from './Pages/CreateKudoCards';
import CreateKudoBox from './Pages/CreateKudoBox';
import CreateItems from './Pages/CreateItems';
import Login from './Pages/Login';
import InitialPage from './Pages/InitialPage';
import Sprint from './Pages/Sprint';


function Routers (){
  return(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navigate to='/login'/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/initialpage' element={<InitialPage/>}/>
    <Route path='/createsprint' element={<CreateSprint/>}/>
    <Route path='/sprint' element={<Sprint/>}/>
    <Route path='/createretrospectiva' element={<CreateRetrospectiva/>}/>
    <Route path='/createkudocards' element={<CreateKudoCards/>}/>
    <Route path='/createkudobox' element={<CreateKudoBox/>}/>
    <Route path='/createitems' element={<CreateItems/>}/>
    </Routes>
  </BrowserRouter>    

  )
}

export default Routers;
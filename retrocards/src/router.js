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

function Routers (){
  return(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navigate to='/login'/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/CreateSprint' element={<CreateSprint/>}/>
    <Route path='/CreateRetrospectiva' element={<CreateRetrospectiva/>}/>
    <Route path='/CreateKudoCards' element={<CreateKudoCards/>}/>
    <Route path='/CreateKudoBox' element={<CreateKudoBox/>}/>
    <Route path='/CreateItems' element={<CreateItems/>}/>
    </Routes>
  </BrowserRouter>    

  )
}

export default Routers;
import './App.css';
import Login from './Pages/Login';
import CreateKudoCards from './Pages/CreateKudoCards';
import CreateSprint from './Pages/CreateSprint';
import CadastroRetrospectiva from './Pages/CadastroRetrospectiva'
import CreateItems from './Pages/CreateItems';


function App() {
  return (
    <div className="App">
      <Login/>
      {/* <hr />
      <CreateKudoCards/>
      <hr />
      <CreateSprint/>
      <CadastroRetrospectiva/> */}
      <hr />
      <CreateItems/>
    </div>
  );
}

export default App;

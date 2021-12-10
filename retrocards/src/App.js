import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import CreateKudoCards from './Pages/CreateKudoCards';
import CreateSprint from './Pages/CreateSprint';
import CadastroRetrospectiva from './Pages/CadastroRetrospectiva'


function App() {
  return (
    <div className="App">
      <Login/>
      <hr />
      <CreateKudoCards/>
      <hr />
      <CreateSprint/>
      <CadastroRetrospectiva/>
    </div>
  );
}

export default App;

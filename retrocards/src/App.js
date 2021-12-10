import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import CreateKudoCards from './Pages/CreateKudoCards';
import CreateSprint from './Pages/CreateSprint';

function App() {
  return (
    <div className="App">
      <Login/>
      <hr />
      <CreateKudoCards/>
      <hr />
      <CreateSprint/>
    </div>
  );
}

export default App;

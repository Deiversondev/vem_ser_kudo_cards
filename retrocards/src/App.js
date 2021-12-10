import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import CreateKudoCards from './Pages/CreateKudoCards';

function App() {
  return (
    <div className="App">
      <Login/>
      <hr />
      <CreateKudoCards/>
    </div>
  );
}

export default App;

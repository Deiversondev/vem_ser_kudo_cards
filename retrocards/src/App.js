import './App.css';
import Routers from './router';
import { AuthProvider } from './context/AuthContext';
import { ListProvider } from './context/ListContext';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <ListProvider>
        <Header/>
        <Routers/>
      </ListProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

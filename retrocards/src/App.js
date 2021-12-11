import './App.css';
import Routers from './router';
import { AuthProvider } from './context/AuthContext';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header/>
        <Routers/>
      </AuthProvider>
    </div>
  );
}

export default App;

import './App.css';
import Routers from './router';
import { AuthProvider } from './context/AuthContext';
import { ListProvider } from './context/ListContext';
import { UserGroupProvider } from './context/UserGroupContext';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider> 
      <ListProvider>
      <UserGroupProvider>
        <Header/>
        <Routers/>
      </UserGroupProvider>
      </ListProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

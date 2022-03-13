import './App.css';
import Dashboard from './components/Dashboard'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  if(isLoading) {
    return <div className="loading mt-3 loading-center"></div>
  }

  return (
    <div className="App">
      {isAuthenticated
        ? <>
            <Dashboard />
          </>
        : loginWithRedirect()}
    </div>
  );
}

export default App;

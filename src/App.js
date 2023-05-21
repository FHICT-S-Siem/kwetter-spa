import './App.css';
import Layout from './Component/NavBar/MainPage/Layout';
import NavBar from './Component/NavBar/NavBar';
// styles
import "./App.css";

// fontawesome
import { useAuth0 } from '@auth0/auth0-react';
// import { Router, Route, Switch } from "react-router-dom";
// initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated, loginWithRedirect, user, getAccessTokenSilently } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="flex-grow-1 mt-5">
        <h1>Loading...</h1>
        
      </div>
    </div>
    )
  }

  if (!isAuthenticated) {
    loginWithRedirect()
  } else {
    getAccessTokenSilently().then(token => {
      console.log(token)
      console.log(user)
    })
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="flex-grow-1 mt-5">
        <Layout />
        
      </div>
    </div>
  );
};

export default App;

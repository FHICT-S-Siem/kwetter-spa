// Components
import Layout from './Component/NavBar/MainPage/Layout';
import NavBar from './Component/NavBar/NavBar';

// styles
import "./App.css";

// Auth0
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isLoading, error, isAuthenticated, loginWithRedirect, user, getAccessTokenSilently } = useAuth0();

  if (error) {
    return (<div>Oops... {error.message}</div>);
  }

  if (isLoading) {
    return (<h1>Loading...</h1>)
  }

  if (!isAuthenticated) {
    loginWithRedirect()
  }  else {
    getAccessTokenSilently().then(token => {
      console.log(token)
      console.log(user)
      const userdata = { 
        userState: "unblocked",
        role: "user",
        name: user.name,
        email: user.name,
        picture: user.picture,
        nickname: user.nickname,
        sub: user.sub,
        updated_at: user.updated_at,
      }
      console.log(userdata)
      
      return fetch('http://localhost:8081/api/v1/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userdata),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
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

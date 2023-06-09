import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const redirect_uri = 'http://localhost:3000'
const onRedirectCallback = (appState) => {
  
};
const providerConfig = {
  domain: 'dev-xhcsu86z.us.auth0.com',
  clientId: 'pVaSIUt6mODeFvU4OxucDKwegDqqGdLS',
  onRedirectCallback,
  responseType: 'token id_token',
  authorizationParams: {
    audience: "http://localhost:3000",
    scope: "openid profile",
    redirect_uri: window.location.origin,
  },
};
root.render(
  <>
      <Auth0Provider
     {...providerConfig}
    >
      <App />
    </Auth0Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

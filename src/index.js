import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/context';
import './landingpage.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <GoogleOAuthProvider clientId='668444211742-f4kiimq957krf5t62hmbkjgo56ejpo9k.apps.googleusercontent.com'>
    <BrowserRouter>
    <ContextProvider>
       <App/>
    </ContextProvider>
  </BrowserRouter>
    </GoogleOAuthProvider>

);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/context';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Sidebar from './sidebar';
import './landingpage.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <ContextProvider>
       <App/>
    </ContextProvider>
  </BrowserRouter>

);

reportWebVitals();

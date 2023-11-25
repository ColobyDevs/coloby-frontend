import './App.css';
import React, {useContext} from 'react';
import { Context } from './context/context';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import Login from './authentication/login';
import Signup from './authentication/signup';
import Dashboard from './dashboard/dashboard';
import Channels from './channels/channels';
import Sidebar from './sidebar';
import Chat from './channels/chats';
// import TaskBoard from './taskboard/taskboard';
import Profile from './profile/profile';
import Spinner from './spinner';


function App() {
  const {token} = useContext(Context)
  
  return (
    <>
    {token && <Sidebar/>}
    <Spinner/>
      <Routes>
    <Route path='/dashboard/:userId' element = {<Dashboard/>}/>
    <Route path='/profile' element = {<Profile/>}/>
    <Route path='/channels' element = {<Channels/>}/>
    <Route path='/chat' element = {<Chat/>}/>
    <Route path='/login' element = { <Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/taskboard' element = {<Profile/>}/>
    <Route path='/' element = { <LandingPage/>}/>

      </Routes>
  
    </>
  );
}

export default App;

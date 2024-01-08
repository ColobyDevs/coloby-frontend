import './App.css';
import React, {useContext} from 'react';
import { Context } from './context/context';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import Login from './authentication/login';
import Signup from './authentication/signup';
import Dashboard from './dashboard/dashboard';
import Channels from './rooms/channels';
import Sidebar from './sidebar';
import Chat from './rooms/chats';
import Profile from './profile/profile';
import Spinner from './shared/spinner';
import NotifModal from './shared/notifModal';
import Toast from './shared/toast';
import TaskBoard from './taskboard/taskboard';
import ActionModal from './shared/actionModal';


function App() {
  const {auth} = useContext(Context)
  const {token} = auth
  
  return (
    <>
    {token && <Sidebar/>}
    <ActionModal/>
    <NotifModal/>
    <Spinner/>
    <Toast/>
      <Routes>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/profile' element = {<Profile/>}/>
    <Route path='/rooms' element = {<Channels/>}/>
    <Route path='/chat' element = {<Chat/>}/>
    <Route path='/login' element = { <Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/taskboard/:section' element = {<TaskBoard/>}/>
    <Route path='/' element = { <LandingPage/>}/>


      </Routes>
  
    </>
  );
}

export default App;

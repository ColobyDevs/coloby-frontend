import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import Login from './authentication/login';
import Signup from './authentication/signup';
import Dashboard from './dashboard/dashboard';
import Channels from './channels/channels';
import Sidebar from './sidebar';
import Chat from './channels/chats';
import TaskBoard from './taskboard/taskboard';


function App() {
  return (
    <>
    <Sidebar/>
      <Routes>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/channels' element = {<Channels/>}/>
    <Route path='/chat' element = {<Chat/>}/>
    <Route path='/taskboard' element = {<TaskBoard/>}/>
    <Route path='/login' element = { <Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element = { <LandingPage/>}/>
      </Routes>
  
    </>
  );
}

export default App;

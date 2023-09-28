import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import Login from './authentication/login';
import Signup from './authentication/signup';
import Dashboard from './dashboard/dashboard';
import Sidebar from './sidebar';


function App() {
  return (
    <>
    <Sidebar/>
      <Routes>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/login' element = { <Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element = { <LandingPage/>}/>
      </Routes>
  
    </>
  );
}

export default App;

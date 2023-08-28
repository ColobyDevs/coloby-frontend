import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import Login from './authentication/login';
import Signup from './authentication/signup';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/' element = { <LandingPage/>}/>
    <Route path='/login' element = { <Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    

      </Routes>
    </div>
  );
}

export default App;

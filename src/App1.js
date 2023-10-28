import './App.css';
import Event from './signup/Event';
import Home from './signup/Home';
import Login from './signup/Login';
import Nvbr from './signup/Nvbr';
import Signup from './signup/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 


function App1() {
  return (
    <div>
        <BrowserRouter>
        <Nvbr/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/event' element={<Event/>}></Route>


          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App1
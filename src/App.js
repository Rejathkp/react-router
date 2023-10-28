import logo from './logo.svg';
import './App.css';
import Navbarup from './sample/Navbarup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './sample/Home';
import Aboutme from './sample/Aboutme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarup/>
          <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<Aboutme/>}></Route>

          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

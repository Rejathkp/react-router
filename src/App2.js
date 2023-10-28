import './App.css';
import Hme from './Apiroute/Hme';
import Navbr from './Apiroute/Navbr';
import Lgin from './Apiroute/Lgin';
import Nw from './Apiroute/Nw';
import Womens from './Apiroute/Womens'
import Electroncs from './Apiroute/Electroncs'
import Jewelery from './Apiroute/Jewelery'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App2() {
  return (
    <div>
        <BrowserRouter>
        <Navbr/>
          <Routes>
              <Route path='/Hme' element={<Hme/>}></Route>
              <Route path='/lgin' element={<Lgin/>}></Route>
              <Route path='/nw' element={<Nw/>}></Route>
              <Route path='/women' element={<Womens/>}></Route>
              <Route path='/electronics' element={<Electroncs/>}></Route>
              <Route path='/jewelery' element={<Jewelery/>}></Route>



          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App2
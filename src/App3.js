import React, { useState } from "react";
import { createContext } from "react";
import crse from "./table/Arry2";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbr from "./table/Navbr";
import Hme from "./table/Hme";
import Createform from "./table/Createform";
import EditForm from "./table/EditForm";
import Viewform from "./table/Viewform";
import Table2 from "./table/Table2";


const NewwContext = createContext(); 

function App3() {
 
    console.log(crse);

    const [student,setStudent] = useState(crse)
    return(
        <div>
            <BrowserRouter>
            <Navbr/>
               <NewwContext.Provider value={[student,setStudent]}>
                  <Routes>
                  <Route path='/' element={<Hme/>}></Route>
                  <Route path='/table' element={<Table2/>}></Route>
                  <Route path='/create' element={<Createform/>}></Route>
                  <Route path='/edit/:user' element={<EditForm/>}></Route>
                  <Route path='/view/:user' element={<Viewform/>}></Route>
                  


                  </Routes>
                  
               </NewwContext.Provider>
             </BrowserRouter>
             
        </div>
        )
     }
     
     export default App3;
     export {NewwContext}
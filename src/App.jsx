import Component1 from "./Header"
import LeftComponent from "./LeftComponent"
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'
import Module from "./Module"
import TestModule from "./TestModule"
import Batch from "./Batch"
import Resources from "./Resources"
import CreateTest from './CreateTest';
import AllTests from './AllTests';

import TestResults from './TestResults';

function App() 
{

  return (
    <>
      

        <Component1></Component1>
        <BrowserRouter>
          <div className="flex">
              <LeftComponent></LeftComponent>
              <Routes>
          
          <Route path='Module' element={<Module/>}></Route>
         
         <Route path='/' element={<Batch/>}>
            
          </Route>
          
          <Route path='TestModule' element={<TestModule/>}>
            <Route index element={<AllTests/>}></Route>
            <Route path="createTest"  element={<CreateTest/>}></Route>
            <Route path="testResults"  element={<TestResults/>}></Route>
          </Route>
          
          <Route path='Resources' element={<Resources/>}></Route>

        </Routes>
          </div>
        </BrowserRouter>
    
        
        
      
      
    </>
  )
}

export default App

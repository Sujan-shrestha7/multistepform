import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stepper from './Stepper';
import Hello from './Hello';
const Router = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello/>} />     
          <Route path="/test" element={<Stepper />} />          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;

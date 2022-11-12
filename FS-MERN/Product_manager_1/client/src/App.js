import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';
import './App.css';
import Main from './Views/Main';
import Detail from "./components/Detail";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route element={<Main/>} path="/" default/>
        <Route element={<Detail/>} path="/product/:id"/>
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;

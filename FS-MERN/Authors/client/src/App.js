import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import AuthorList from './components/DisplayAll';
import CreateAuthor from './components/CreateAuth';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
    <h1>Favorite Authors</h1>
      <div className="App">
        <Routes>
          <Route element={<AuthorList/>} path="/" default/>
          <Route element={<CreateAuthor/>} path="/new"/>
          <Route element={<Update/>} path="/edit/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

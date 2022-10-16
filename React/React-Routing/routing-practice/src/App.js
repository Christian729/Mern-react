import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Word from './components/word';
// import Number from './components/number';
import Colored from './components/colored';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:word' element={<Word/>}/>
          {/* <Route path='/:word' element={<Number />}/>  
          this  route is no longer needed as our experiment to make these routes more modular 
          wansnt very efficient and the logic difficult to comprehend.
          */} 
          <Route path='/:word/:color/:bgCol'element={<Colored/>}/> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

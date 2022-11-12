import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/home';
import About from './components/about';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ColoredBox from './components/form';
import BoxDisplay from './components/formDisplay';
import './App.css';

function App() {
  const [ box, setBox ] = useState([]);


  return (
    <div className="App">
      <ColoredBox box={ box } setBox={ setBox } />
      <BoxDisplay box={ box }/>
    </div>
  );
}

export default App;

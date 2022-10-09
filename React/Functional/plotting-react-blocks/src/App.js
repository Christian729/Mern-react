import React from 'react'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import './components/styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='inner'>
      <Navigation />
        <Main>
          
          <div className='gold'>
            <SubContents/>
            <SubContents/>
            <SubContents/>
          </div>
          <Advertisement />
          
        </Main>
    </div>
    </div>
  );
}

export default App;

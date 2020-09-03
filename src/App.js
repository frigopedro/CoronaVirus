import React from 'react';
import './App.css';
import Header from './components/Header';
import GeneralCases from './components/GeneralCases';
import Brazil from './components/Brazil';
import China from './components/China';

function App() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <Header />
      </div>
      <div className="bodyContent">
        <Brazil />
        <GeneralCases />
        <China />
      </div>
    </div>
  );
}

export default App;

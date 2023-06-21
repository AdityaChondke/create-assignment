import React from 'react';
import CardStack from './components/Card';
import './App.css';
function App() {


  return (
    <div className="App">
    <div className="root-container">
    <div className="left-section"></div>
    <div className="container">
      <CardStack />
    </div>
    </div>
    <div className="right-section"></div>
    </div>
  );
}

export default App;

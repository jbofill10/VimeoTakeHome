import React from 'react';
import WhiteHalfPageView from "./views/WhiteHalfPageView"
import GradientView from "./views/GradientView"
import BlackHalfPageView from "./views/BlackHalfPageView"
import './App.css';

function App() {
  return (
    <div className="App">
      <WhiteHalfPageView/> 
      <BlackHalfPageView/>
      <GradientView/>
    </div>
  );
}

export default App;

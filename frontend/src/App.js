import React from 'react';
import WhiteHalfPageView from "./views/WhiteHalfPageView"
import GradientView from "./views/GradientView"
import BlackHalfPageView from "./views/BlackHalfPageView"
import Carousel from "./components/Carousel/Carousel"
import './App.css';

function App() {
  return (
    <div className="App">
      <WhiteHalfPageView/> 
      <BlackHalfPageView/>
      <GradientView/>
      <Carousel/>
    </div>
  );
}

export default App;

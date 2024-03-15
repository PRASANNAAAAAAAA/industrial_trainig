import React from 'react';
import Home from './components/HomePage'
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import './App.css';
function App() {
  return (   
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}
export default App;
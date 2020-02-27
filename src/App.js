import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
import Food from './Components/Food'


function App() {
  return (
    <div className="App">
      <h1>Hello, welcome to my sandbox!</h1>
      <h3>I'm excited to be learning :)</h3>
      <Person name="Andrew" age="28"/>
      <Person name="Amelia" age="25"/>
      <Person></Person>
      <Food foodName="PIZZA"/>
    </div>
  );
}

export default App;

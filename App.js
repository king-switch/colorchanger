import React from 'react';
import './App.css';

var colorPalette = ['black', 'blue', 'red', 'yellow', 'purple', 'green', 'grey', 'orange', 'pink'];
const body = document.querySelector('body');

function randomizer(){
  const colorIndex = parseInt(Math.random()*colorPalette.length);
  console.log(colorPalette[colorIndex]);
  body.style.backgroundColor = colorPalette[colorIndex];
}

function App() {

  return (
    <div className='App'>
        <button onClick={randomizer} className='color-btn'>Color changer</button>
    </div>
  );
}

export default App;
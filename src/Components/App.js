import React, { useState } from 'react';
import CounterInput from './CounterInput'
import CounterOutput from './CounterOutput'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <CounterOutput counter={counter} />
      <br />
      <CounterInput setCounter={setCounter} counter={counter} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';
import Parent from './Parent';
import CounterContext from './ConterContext';

function App() {
  //let [count,setCount] =useState(25) # normally it is so   
  //This means countState is an array and give count variable in value={count}

  let countState = useState(1)

  return (
    <CounterContext.Provider value={countState}> 
    <div className="App">
      <h2>This is main App using CounterContext.Provider </h2>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;

import React from 'react';

import './App.css';
import Parent from './Parent';
import CounterContext from './ConterContext';

function App() {
  return (
    <CounterContext.Provider value={24}>
    <div className="App">
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;

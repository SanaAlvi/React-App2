import React, { useContext } from 'react';
import './App.css';
import CounterContext from './ConterContext';

// import Parent from './Parent';

const Child = () => {
    let counterValue = useContext (CounterContext)
    return(
        <div className="App-header">
            <h1>This is first Child </h1>
           <h2> Counter Value is {counterValue} </h2>
        </div>
    )
}
export default Child;

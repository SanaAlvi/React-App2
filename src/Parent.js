import React, { useContext } from 'react';
import './App.css';
import Child from './Child';
import Countercontext from './ConterContext';

const Parent = () => {
    let CountState = useContext (Countercontext) 
    return(
        <div className="App-header">
            <h1>Hello from Parent:{CountState[0]}</h1>
            <button onClick={() => {CountState[1](2)}}>
                Change it
            </button>
           <Child />
        </div>
    )
}
export default Parent;
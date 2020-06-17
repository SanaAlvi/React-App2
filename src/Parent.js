import React, { useContext } from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';
import Countercontext from './ConterContext';

const Parent = () => {
    let CountState = useContext (Countercontext) 
    return(
        <div className="App">
            <Child />
            <h1>Hello from Parent:{CountState[0]}</h1>
            <button onClick={() => {CountState[1](2)}}>
                Change it
            </button>
            <Child2 />
        </div>
    )
}
export default Parent;
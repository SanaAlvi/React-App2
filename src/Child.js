import React, { useContext } from 'react';
import './App.css';
import CounterContext from './ConterContext';

// if we are using let [count,setCount] =useState(25) in App.js and we simply 
// <button onClick={() => {counterValue++}}>Add</button>  do this in child 
// value will never shows in page to be updated means update hu jahy ga render nai hu ga.


// we have to give {counterValue[0]} beacuse it is array and first part have number
// second have function in line 18

const Child = () => {
    let counterValue = useContext (CounterContext)
    return(
        <div className="App-header">
            <h1>This is first Child </h1>
            <h2> Counter Value is {counterValue[0]} </h2> 
            <button onClick={() => {counterValue[1](counterValue[0]++)}}>Change it</button>         
        </div>
    )
}
export default Child;

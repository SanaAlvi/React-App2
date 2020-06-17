import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';
 
const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer,1);
    return(
        <div className="App">
            <h2>This is Child2 made for learning Reducer</h2>
            <h3>Value of Reducer: {state}</h3>
            <button onClick={() =>dispatch("INCREMENT") }>
                Increment Reducer
            </button>
            <button onClick={() =>dispatch("DECREMENT") }>
                Decrement Reducer
            </button>
        </div>
    ) 
}
export default Child2;
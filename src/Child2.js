import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';
 
const Child2 = () => {
    let [sana, dispatch] = useReducer(CounterReducer,24);
    return(
        <div>
            <h2>This is Child2 made for learning Reducer</h2>
            <h3>Value of Reducer: {sana}</h3>
            <button onClick={() =>dispatch("INCREMENT") }>
                Increment Reducer
            </button>
        </div>
    ) 
}
export default Child2;
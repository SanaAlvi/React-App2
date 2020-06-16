import React from 'react';

import Child from './Child';

const Parent = (props) => {
    return(
        <div className="App-header">
            <h1>Hello from Parent</h1>
           <Child />
        </div>
    )
}
export default Parent;
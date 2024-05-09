import React, { useState } from 'react'

function Counter() {
    const [valueOfCount,setValueOfCount] = useState(0)
    return (
        <div>
        <h1>Counter App</h1> 
        <p>Count: {valueOfCount}</p>
        <button onClick={()=>{setValueOfCount(pre=>pre+1)}}>Increment</button>
        <button onClick={()=>{setValueOfCount(pre=>pre-1)}}>Decrement</button>
        </div>
    )
}

export default Counter
import React, { useState } from 'react'

function HooksCounter2() {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Count {counter}</h2>
      <div>
        <button style={{margin: "10px"}} onClick={()=> setCounter(0)}>Reset</button>
        <button style={{margin: "10px"}} onClick={() => setCounter(counter + 1)}>Increment</button>
        <button style={{margin: "10px"}} onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default HooksCounter2
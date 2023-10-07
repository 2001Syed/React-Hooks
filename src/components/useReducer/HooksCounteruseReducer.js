import React, { useReducer } from 'react'


const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState
    
        default:
            return state
    }
}

function HooksCounteruseReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)  //useReducer also needs array destructuring.
    // Above count refers to the initialState and dispatch refers to the reducer function.
  return (
    <div>
        <h1>Count - {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>// onClick only accepts the function or a arrow function.
  )
}

export default HooksCounteruseReducer

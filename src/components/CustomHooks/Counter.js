import React, { useState } from 'react'
import useCounter from './useCounter'

function Counter() {

  const [counter, increment, decrement, reset] = useCounter()


  return (
    <div>
        <h1>Counter - {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter

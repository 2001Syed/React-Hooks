import React, { useState } from 'react'
import useDocCounter from './useDocCounter'

function DocTitleCounter() {

    const [counter, setCounter] = useState(0)

    useDocCounter(counter)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
    </div>
  )
}

export default DocTitleCounter

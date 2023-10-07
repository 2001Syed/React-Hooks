import React, { useState } from 'react'

function useCounter(initialCount = 0, value) {

    const [counter, setCounter] = useState(initialCount)

    const increment = () => {
        setCounter(prevCounter => prevCounter + value)
    }

    const decrement = () => {
        setCounter(prevCounter => prevCounter - value)
    }

    const reset = () => {
        setCounter(0)
    }


  return [counter, increment, decrement, reset]
}

export default useCounter

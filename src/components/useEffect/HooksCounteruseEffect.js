import React, { useEffect, useState } from 'react'

function HooksCounteruseEffect() {
    const [counter , setCounter] = useState(0)

    useEffect(()=>{
        document.title = `You Clicked ${counter} times`
    })

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>You Clicked {counter}</button>
    </div>
  )
}

export default HooksCounteruseEffect
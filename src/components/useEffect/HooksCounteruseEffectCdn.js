import React, { useEffect, useState } from 'react'

function HooksCounteruseEffectCdn() {
    const [counter , setCounter] = useState(0)
    const [name , setName] = useState("")

    useEffect((()=>{
        console.log("Document is Getting Updated..........")
        document.title = `You Clicked ${counter} times`
    }),[counter])

    // For Conditionally executiong an effect we are passing second parameter as array, In this Array we need specify either props or state that we need to watch for, Only if those props and state that specify in this array where to change, the effect will be excecuted.

    // For our example we only need effect to be changed when the counter changes its state or we can say value here.

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>You Clicked {counter}</button>
    </div>
  )
}

export default HooksCounteruseEffectCdn
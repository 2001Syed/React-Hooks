import React, { useEffect, useState } from 'react'

function HooksMouse2() {

    const [x , setX] = useState(0);
    const [y , setY] = useState(0);

    const logMouseMovement = e => {
        console.log('Mouse Event id called.........')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect((() => {
        console.log("UseEffect Called");
        window.addEventListener("mousemove" , logMouseMovement);

        return () => {
            console.log("Component is getting unmounted");
            window.removeEventListener("mousemove" , logMouseMovement);
        }
    }), [])

    // To Only call useEffect Once we define the second parameter in the useEffect function.

  return (
    <div>
      <div>
        <h2>
            X : {x}     Y : {y}
        </h2>
      </div>
    </div>
  )
}

export default HooksMouse2

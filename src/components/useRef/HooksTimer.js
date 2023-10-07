import React, { useEffect, useRef, useState } from 'react'

function HooksTimer() {

    const [timer, setTimer] = useState(0)

    const intervalref = useRef();

    useEffect(()=>{
        intervalref.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);
        return () => {
            clearInterval(intervalref.current)
        }
    },[])

  return (
    <div>
      Hooks Timer - {timer}
        <button onClick={() => clearInterval(intervalref.current)}>Hooks Timer Clear</button>
    </div>
  )
}

export default HooksTimer

import React, { useEffect, useState } from 'react'

function HooksCounterInterval() {

    const [count , setCount] = useState(0);
    
    const tick = () => {
        setCount(count + 1);
    }

    
    useEffect((() => {
        const interval = setInterval(tick, 1000);

        return ()=>{
            clearInterval(interval);
        }
    }), [count])

    // Above in second parameter we had to give the count as an array if we wouldnt have given that the interval would have shopped at the 1 only.


  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default HooksCounterInterval

import React, {useState} from 'react'
import HooksMouse2 from './HooksMouse2'

function MouseContainer() {
    const [display , setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouse2></HooksMouse2> }  
    </div>
    // display && HookMouse2 line explains if the display is true make the hookmouse2 file visible but if the diaplay is false we can't see the hookmouse2 file.
    // Above code we got the hooksmouse output and it is displaying and undisplaying correctly but in the console when the display is false in concole we are getting the error and after error the log statement is getting executed again.
    // And to overcome this problem we use componentWillUnmount method in class component but in the functional component and useEffect hook we just write the componentWillUnmount the code in return statment in useEffect Function.
    // The Changes are made in HooksMouse2.js
  )
}

export default MouseContainer

import React from 'react'

function Button({handleClick, children}) {  // children refers to the value written in between the redering button component
    console.log(`Redendering.........${children}`);
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)

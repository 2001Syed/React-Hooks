import React, { useEffect, useRef } from 'react'

function InputForm() {

    const inputReference = useRef(null)

    useEffect(() => {
        // Here we are wrting logic to focus the input area onloading of the component
        inputReference.current.focus()
    }, [])
  return (
    <div>
      <input ref={inputReference} type="text" />
    </div>
  )
}

export default InputForm

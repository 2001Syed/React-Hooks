import React, { useEffect } from 'react'

function useDocCounter(count) {
    useEffect(() => {
        document.title = `Clicked ${count}`
    },[count])
}

export default useDocCounter

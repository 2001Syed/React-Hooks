import React, { useState } from 'react'

function HooksCounter4() {
    const [items, setItems] = useState([])
  
    const addItems = () => {
        setItems([... items, {
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1 //using math module to get random number in to array.
        }])
    }

    return (
    <div>
      <button onClick={addItems} id={items.id}>Add a number</button>
      <ul>
        {
            items.map(item =>{
                return (
                    <li key={item.id}>{item.value}</li>
                )
            } 
            )
        }
      </ul>
    </div>
  )
}

export default HooksCounter4

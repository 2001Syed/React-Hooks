import React, { useState } from 'react'

function HooksCounter3() {
    const [name, setName] = useState({
        firstName : "",
        lastName : "" 
    })  
  return (
    <div>
        <div>
            <input type="text"
            value={name.firstName}
            onChange={e => setName({...name , firstName: e.target.value })}/>
            <input type="text"
            value={name.lastName}
            onChange={e => setName({...name , lastName: e.target.value })}/>  
        </div>
        <div>
            <h2>
                First Name : {name.firstName}
            </h2>
            <h2>
                Last Name : {name.lastName}
            </h2>
            <h2>
                {JSON.stringify(name)}
            </h2>
        </div>
    </div>  //JavaScript allows us to listen to an input’s change in value by providing the attribute onchange. React’s version of the onchange event handler is the same, but camel-cased.
    //We can access the target input’s value inside of the handleChange by accessing e.target.value. Therefore, to log the name of the input field, we can log e.target.name.
    //The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
  )
}

export default HooksCounter3

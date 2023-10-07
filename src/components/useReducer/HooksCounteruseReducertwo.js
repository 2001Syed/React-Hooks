import React, { useReducer } from 'react'


const initialState = {
    firstCounter : 0 ,
    secondCounter : 7
};// this is the state Object

const reducer = (state, action) => {  //Here also state refers to the intialState
    switch (action.top) {
        case 'increment':
            return {...state ,firstCounter : state.firstCounter + action.value};
        case 'decrement':
            return {...state ,firstCounter : state.firstCounter - action.value};
        case 'incrementCounter2':
            return {...state ,secondCounter : state.secondCounter + action.value};
        case 'decrementCounter2':
            return {...state ,secondCounter : state.secondCounter - action.value};
        case 'increment5':
            return {...state ,firstCounter : state.firstCounter + action.value};
        case 'decrement5':
            return {...state ,firstCounter : state.firstCounter - action.value};
        case 'reset':
            return initialState
    // Above action.value is given because action should be performed on value not on the given number
        default:
            return state
    }
}

function HooksCounteruseReducertwo() {

    const [count, dispatch] = useReducer(reducer, initialState)  //useReducer also needs array destructuring.
    // Above count refers to the initialState and dispatch refers to the switch function.
  return (
    <div>
        <h1>count1 - {count.firstCounter}</h1>
        <h1>count2 - {count.secondCounter}</h1>
      <button onClick={() => dispatch({top : "increment", value: 1})}>Increment</button>
      <button onClick={() => dispatch({top : "decrement", value: 1})}>Decrement</button>
      <button onClick={() => dispatch({top : "increment5", value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({top : "decrement5", value: 5})}>Decrement 5</button>
      <div>
        <button onClick={() => dispatch({top : "incrementCounter2", value: 7})}>Increment</button>
        <button onClick={() => dispatch({top : "decrementCounter2",value: 7})}>Decrement</button>
      </div>
      <button onClick={() => dispatch({top : "reset"})}>Reset</button>
    </div>// onClick only accepts the function or a arrow function.
  )
}

export default HooksCounteruseReducertwo

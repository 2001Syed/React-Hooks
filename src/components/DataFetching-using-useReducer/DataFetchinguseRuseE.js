import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading : true,
  post : {},
  error : ""
}

const reducer = (state, action) => {
  switch(action.type){
    case "FETCH-SUCCESS":
      return {
        loading: false,
        post : action.payload,
        error : ""
      }
    case "FETCH-ERROR":
      return {
        loading : false,
        post : {},
        error : "Something is Wrong"
      }

    default:
      return state
  }
}

function DataFetchinguseRuseE() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        dispatch({
          type : "FETCH-SUCCESS",
          payload : response.data
        })
    })
    .catch(error => {
        dispatch({
          type : "FETCH-ERROR"
        })
    })
}, []);


  return (
    <div>
      {state.loading ? 'loading' : state.post.title}
      {state.error ? state.error : null}

    </div>
  )
}

export default DataFetchinguseRuseE

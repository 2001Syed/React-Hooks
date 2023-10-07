import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DataFetching() {

    const [post , setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []) // Second parameter means specifying empty dependency list, If we doesn't have a empty array the effect goes on infinite loop.


  return (
    <div>
      <ul>
        {
            post.map(post => (

                <li key={post.id}>{post.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default DataFetching

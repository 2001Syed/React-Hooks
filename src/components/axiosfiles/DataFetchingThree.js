import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingThree() {
    const [post , setPost] = useState({})
    const [id , setId] = useState(1)
    const [IdFromClickingbtn , setIdFromClickingbtn] = useState(1)

    const HandleClick = () => {
        setIdFromClickingbtn(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdFromClickingbtn}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [IdFromClickingbtn]) 


  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={HandleClick}>Fetch Post</button>
        <div>
            {post.title}
        </div>
    </div>
  )
}

export default DataFetchingThree

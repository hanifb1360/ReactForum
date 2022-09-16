import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import PostTitle from "../components/PostTitle"


const Home = () => {

const [allPosts, setAllPosts] = useState([])
    
  useEffect(()=>{
        
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => setAllPosts(res.data))

          },[])
          
  return (
    <div>
    {allPosts && allPosts.map((post, index)=>{
return (
  
  <PostTitle title={post.title} id={post.id}/>
  
 
)
    })}
    </div>
  )
}

export default Home
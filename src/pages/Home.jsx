import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import PostTitle from "../components/PostTitle"
import homeStyle from '../styles/home.module.css'


const Home = () => {

const [allPosts, setAllPosts] = useState([])
    
  useEffect(()=>{
        
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => setAllPosts(res.data))

          },[])
          
  return (
    <div className={homeStyle.listContainer}>
    {allPosts && allPosts.map((post, index)=>{
return (
  
  <PostTitle title={post.title} id={post.id}/>
  
 
)
    })}
    </div>
  )
}

export default Home
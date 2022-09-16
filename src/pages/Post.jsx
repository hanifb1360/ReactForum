import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import postStyle from '../styles/post.module.css'



const Post = () => {

    
    const navigate = useNavigate();
    const onNavigate = (page) => {
        navigate(page)
    }
    const {id} =useParams();
    console.log(id)
    
    const [post, setPost] = useState(null)
    const [postId, setPostId] = useState(null)
    const [comments, setComments] = useState(null)
   

    useEffect(()=>{
        
        setPostId(id)
       

          },[id])

    useEffect(()=>{
        
      if (postId) {
        
     
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => setPost(res.data))

        axios.get(`https://jsonplaceholder.typicode.com/comments/${postId}`)
        .then(res => setComments(res.data))
      }
          },[postId])
    
    console.log(comments)
    
  return (
    <div className={postStyle.body}>

    <div className={postStyle.postContainer}>
    <h2 className={postStyle.postTitle}>{post?.title}</h2>
    <p className={postStyle.postBody}>{post?.body}</p>
    </div>

    {comments && 
    <div className={postStyle.commentContainer}>
    <h2 className={postStyle.commentIntro}>Comments:</h2>
    <p className={postStyle.commentName}>{comments.name}</p>
    <p className={postStyle.commentEmail}>{comments.email}</p>
    <p className={postStyle.commentBody}>{comments.body}</p>
    
    </div>
    }

    
    <button className={postStyle.btn} onClick={() => {onNavigate('/')}}>Home</button>

    </div>
  )
}

export default Post

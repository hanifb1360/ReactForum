import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate, useLocation } from "react-router-dom"
// import { CommentList } from "../components/comment"


const Post = () => {

    const location =useLocation();
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
    <div className="postContainer">
    <h2>{post?.title}</h2>
    <p>{post?.body}</p>
    <h2>Comments:</h2>

    {comments && 
    <div>
    <p>{comments.name}</p>
    <p>{comments.body}</p>
    <p>{comments.email}</p>
    </div>
    }

    
    <button className="backButton" onClick={() => {onNavigate('/')}}>Back to Home</button>

    </div>
  )
}

export default Post

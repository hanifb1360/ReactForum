import { Link } from 'react-router-dom'
import postTitleStyle from '../styles/postTitle.module.css'

const PostTitle = (props) => {

    const {title, id} = props;
    return (
        <li className={postTitleStyle.listItem}>
            <Link className={postTitleStyle.link}  to={`/post/${id}`} >{title}</Link>
        </li>
    )
}

export default PostTitle
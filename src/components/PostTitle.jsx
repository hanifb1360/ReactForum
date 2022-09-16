import { Link } from 'react-router-dom'

const PostTitle = (props) => {

    const {title, id} = props;
    return (
        <li>
            <Link className='link'  to={`/post/${id}`} >{title}</Link>
        </li>
    )
}

export default PostTitle
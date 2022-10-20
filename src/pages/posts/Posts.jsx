import PostsContext from '../../postsContext'
import { useContext } from 'react';

const Posts = () => {
  const {todo} = useContext(PostsContext)
  // console.log(todo)
  return (
    <div>posts</div>
  )
}

export default Posts
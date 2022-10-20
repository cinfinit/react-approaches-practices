import PostsContext from '../../postsContext'
import { useContext } from 'react';
import PostItem from './PostItem';

const Posts = () => {
  const {todo} = useContext(PostsContext)
  console.log(todo)
  return (
    <div>{
      todo && todo.length ?(
        <div>
    {todo.map(todo => {
      return(
        <div key={todo.id}>
          <PostItem title={todo.title} />
        </div>
      )
    })}
      </div>
      )
      :(<></>)
      }</div>
  )
}

export default Posts
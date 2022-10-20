import { useState, createContext, useEffect } from "react";

const PostsContext = createContext();

export const PostContextProvider = ({ children }) => {
  const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=20'
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
    fetchTodos();
  },[])

  const fetchTodos = async()=>{
  const response = await  fetch(URL)
  const jsonData = await response.json()
  console.log(jsonData)
  setTodo(jsonData)
  }
  return <PostsContext.Provider value={{todo}}>{children}</PostsContext.Provider>;
};

export default PostsContext;
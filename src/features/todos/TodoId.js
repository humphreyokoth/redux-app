import React,{useEffect}from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTodo,todosSelector } from './todoSlice';
 



const TodoId = () => {
  const dispatch = useDispatch()
  const {todo,isLoading,isError,errorMessage}= useSelector(todosSelector)
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchTodo(id))
  },[dispatch,id])

  if(isLoading){
    return <div>Loading.....</div>
  }
  if(isError){
    return <div>{errorMessage}</div>
  }
  return (
    <div>

    <div>TodoId</div>
    <div>{todo.todo}</div>
    <h5>Completed:{todo.completed}</h5>
    <small>{todo.userId}</small>
    </div>
  )
}

export default TodoId;
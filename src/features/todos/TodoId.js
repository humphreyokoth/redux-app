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
  return (
    <div>TodoId</div>
  )
}

export default TodoId;
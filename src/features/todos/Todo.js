import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {todosSelector,fetchTodos} from './todoSlice'


const Todo = () => {

   const { todos,isLoading,isError,errorMessage } = useSelector(todosSelector)
   const dispatch = useDispatch()
  return (
    <div>
      <h3>TODOS</h3>
      <button
      onClick={ ()=> dispatch(fetchTodos())}>
        {isLoading ? 'Loading...' : 'Load Todos'}
      </button>
    </div>
  )
}

export default Todo
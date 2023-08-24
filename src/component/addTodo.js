import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/action';

const AddTodo = () => {
    const [todotext,setTodotext]=useState('')
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch();
    const handleChangeTodoText = (e)=>{
        setTodotext(e.target.value)
    }
    const AddNewTodo = ()=>{
        if(todotext.trim()!==""){
            dispatch(addTodo(todotext))
            setTodotext("");
        }
    }
  return (
    <div>
        <h1>React Redux TODO APP</h1>
        <input type='text' onChange={handleChangeTodoText} value={todotext}/>
        <button onClick={AddNewTodo}>ADD</button>
    </div>
  )
}

export default AddTodo
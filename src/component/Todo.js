import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../redux/todo_action/action'

const Todo = () => {

    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    const list = useSelector(state => state.todoReducers.list)
    console.log(list)
    const handleChangeTodoText = (e) => {
        setTodoText(e.target.value)

    }
    const handleChangeAddTodo = () => {
        dispatch(addTodo(todoText))
        setTodoText('')
    }

    return (
        <div>
            <input type='text' onChange={handleChangeTodoText} value={todoText} />

            <button onClick={handleChangeAddTodo}>Add</button>

            {
                list.map((elem, index) => {
                    return (
                        <li key={elem.id}>
                            <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>  {elem.text} <span><button onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button></span>
                            </div>
                        </li>
                    )
                })
            }
            <button onClick={()=>dispatch(removeTodo())}>CLEAR ALL</button>
        </div>
    )
}

export default Todo
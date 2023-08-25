import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, checkTodo, deleteTodo, removeTodo } from '../redux/todo_action/action'
import 'animate.css'; // Import the animate.css library
import check from '../assest/check.png'
const Todo = () => {

    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    const list = useSelector(state => state.todoReducers.list)


    const handleChangeTodoText = (e) => {

        setTodoText(e.target.value)



    }
    const handleChangeAddTodo = () => {
        dispatch(addTodo(todoText))
        setTodoText('')
    }

    return (
        <div className='container mt-5'>
 <h1 className='animate__animated animate__fadeOut ' style={{ color: 'greenyellow', animationDelay: '3s' }}> Redux Todo App</h1>
            <h1 className='animate__animated animate__bounceInDown mb-3' style={{ color: 'yellow', animationDelay: '0s' }}><img src={check} alt='check' className='icon'/>To Do </h1>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <div className='container'>
                    <div className='row  justify-content-center align-items-center g-2'>
                        <div className='col-12 col-lg-4 d-flex'>
                            <input
                                type='text'
                                className='form-control me-2 animate__animated animate__fadeInDown'
                                placeholder='Enter your task...'
                                onChange={handleChangeTodoText}
                                value={todoText}
                            />
                            <button className='btn btn-primary animate__animated animate__slideInDown' onClick={handleChangeAddTodo}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row  justify-content-center align-items-center g-2'>
                    <div className='col-12 col-lg-6'>
                        <ul className='list-group'>
                            {list.map((elem, index) => (
                                <li key={elem.id} className='list-group-item d-flex justify-content-between align-items-center mb-4 rounded'>
                                    <div>
                                        <input
                                            type='checkbox'
                                            checked={elem.checked || false}
                                            onClick={() => dispatch(checkTodo(elem.id, !elem.checked))}
                                        />
                                        <span
                                            style={{
                                                textDecoration: elem.checked ? 'line-through' : 'none',
                                                textAlign: 'center',
                                                animationDelay: "0.5s"
                                            }}
                                            className='me-3 animate__animated animate__fadeIn'
                                        >
                                            {elem.text}
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-center '>
                                        <span className='me-3 animate__animated animate__fadeIn' style={{ animationDelay: "0.5s" }}>
                                            {new Date((elem.id / 1000) * 1000).toLocaleString()}
                                        </span>
                                        <button className='btn btn-danger animate__animated animate__fadeInDown' onClick={() => dispatch(deleteTodo(elem.id))}>
                                            <i class="bi bi-trash">Delete</i>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button className='btn btn-danger mt-3 animate__animated animate__slideInDown  ' onClick={() => dispatch(removeTodo())}>
                Clear All
            </button>
        </div>
    )
}

export default Todo
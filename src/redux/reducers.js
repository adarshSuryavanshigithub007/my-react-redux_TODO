
const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:Date.new(),
                text:action.payload.text,
                completed:false
            }   
            state.todos.push(newTodo)
        },
        deleteTodo:(state,action)=>{
            const todoId = action.payload.id
            state.todos = state.todos.filter(todo=>todo.id!==todoId)
        },
        toggleTodo:(state,action)=>{
            const todoId = action.payload.id;
           const todoToToggle = state.todos.find(todo=>todo.id===todoId);
            if(todoToToggle){
                todoToToggle.completed = !todoToToggle.completed;
            }
        }
    }
})

export const { ADD_TODO, TOGGLE_TODO, DELETE_TODO } = todoSlice.actions
export default todoSlice.reducer
export const addTodo = (text)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            text:text
        }

    }
}

export const deleteTodo = (id)=>{
    return{
        type:"DELETE_TODO",
        id
    }
}

export const removeTodo = ()=>{
    return{
        type:"REMOVE_TODO"
    }
}

export const checkTodo = (id,checked)=>{
    return{
        type:"CHECKBOX_TODO",
        id,
        checked
    }
}
const initialData = {
    list: []
}
const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, text } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        text: text
                    }
                ]
            }

        case "DELETE_TODO":
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO":

            return {
                ...state,
                list: []
            }

            case "CHECKBOX_TODO":
                    const updatedState = state.list.map((elem)=>elem.id===action.id?{...elem, checked:action.checked}:elem)
            return {
                ...state,
                    list:updatedState
            }


        default: return state;

    }
}

export default todoReducers
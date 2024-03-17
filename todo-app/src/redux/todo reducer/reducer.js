import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    todos: []
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_TODO_REQUEST:
            return {...state, isLoading: true}

        case GET_TODO_SUCCESS:
            return {...state, isLoading: false, todos: action.payload}
            
        case GET_TODO_FAILURE:
            return {...state, isError: true}

        case POST_TODO_REQUEST:
            return {...state, isLoading: true}   
            
        case POST_TODO_SUCCESS:
            return {...state, isLoading: false, todos: [...state.todos, action.payload]}   
            
        case POST_TODO_FAILURE:
            return {...state, isLoading: false, isError: true}    
            
         default:
            return state
            
    }
}
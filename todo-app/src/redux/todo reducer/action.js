import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType"
import axios from 'axios'

export const getTodos = ()=> (dispatch)=> {
    dispatch({type: GET_TODO_REQUEST})

    let response = fetch('https://krinay-infotech-backend.onrender.com/')
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        dispatch({type: GET_TODO_SUCCESS, payload: data})
    })
    .catch(function(){
        dispatch({type: GET_TODO_FAILURE})
    })
}

export const addTodo = (obj)=> (dispatch)=> {
    dispatch({type: POST_TODO_REQUEST})

    axios.post('https://krinay-infotech-backend.onrender.com/addTodo', obj)
    .then(function(res){
        console.log(res);
        dispatch({type: POST_TODO_SUCCESS, payload: res})
    })
    .catch(function(){
        dispatch({type: POST_TODO_FAILURE})
    })
}

export const deleteTodo = (id)=> (dispatch)=> {
    
    axios.delete(`https://krinay-infotech-backend.onrender.com/${id}`)
    .then(function(res){
        console.log(res);
    })
}

export const editTodo = (obj)=> (dispatch)=> {
    console.log(obj);
    axios.patch(`https://krinay-infotech-backend.onrender.com/${obj.id}`, obj)
    .then(function(res){
        console.log(res);
    })
}
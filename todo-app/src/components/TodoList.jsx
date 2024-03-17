import React, { useEffect } from 'react'
import TodoCard from './TodoCard'
import { Card } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store'
import { getTodos } from '../redux/todo reducer/action'

const TodoList = () => {

    const todos = useSelector(store=> store.todoReducer.todos)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTodos())
    }, [])

  return (
    <div style={{border:'1px solid grey', display:'grid',gap:'10px', gridTemplateColumns:'repeat(3, 1fr)', padding:'20px',  width:'95%',margin:'auto', marginTop:'20px'  }}>
        {todos.map(item=> {
            return <Card variant='outlined'>
                <TodoCard item={item}/>
            </Card>
        })}
    </div>
  )
}

export default TodoList
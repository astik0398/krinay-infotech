import React from 'react'
import TodoCard from './TodoCard'
import { Card } from '@mui/material'

const todos = [{
    id:1,
    title: 'Shopping Items',
    description: 'Bring few items from the market',
    status: true
}, {
    id:2,
    title: 'Complete Assignment',
    description: 'Complete all the pending assignments from HTML & CSS',
    status: false
}, {
    id:3,
    title: 'Bring Grocceries',
    description: 'Bring grocceries mainly peas and cabbage',
    status: false
}, {
    id:4,
    title: 'Pick Saumy from airport',
    description: 'Do not forget to pick Saumy from airport',
    status: true
}]

const TodoList = () => {
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
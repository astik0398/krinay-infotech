import { Button } from '@mui/material'
import React from 'react'

const TodoCard = ({item}) => {
  return (
    <div style={{textAlign:'left', paddingLeft:'15px'}}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p >Status: <span style={{color: item.status ? 'green' : 'red'}}>{item.status ? 'Completed' : 'Not Completed'}</span></p>
        <Button style={{marginLeft:'-15px'}}>Edit</Button>
        <Button>Delete</Button>
    </div>
  )
}

export default TodoCard
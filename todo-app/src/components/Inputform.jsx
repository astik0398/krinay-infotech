import React, { useState } from 'react'
import { TextField, Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo reducer/action'

const Inputform = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()

  function handleAddTodo(){
    let obj = {
      title, description,
      status
    }
    dispatch(addTodo(obj))
    
    window.location.reload()
  }

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'25px', width:'25%', margin:'auto', marginTop:'20px', border:'1px solid grey', padding:'35px'}}>
      
        <TextField onChange={(e)=> setTitle(e.target.value)} label="Todo Title" color="secondary" focused />
        <TextField onChange={(e)=> setDescription(e.target.value)} id="standard-basic" label="Todo Description" variant="standard" />
        <Button onClick={handleAddTodo} color='primary' variant='contained'>Add</Button>
    </div>
  )
}

export default Inputform
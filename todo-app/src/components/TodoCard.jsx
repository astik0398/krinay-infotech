import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/todo reducer/action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
};

const TodoCard = ({item}) => {

  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [obj, setObj] = useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {

    setOpen(true)
    setId(item._id)
    setTitle(item.title)
    setDescription(item.description)

    setObj({_id: id, title, description})
    
  };
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()

  function handleDelete(id){
    dispatch(deleteTodo(id))

    setTimeout(() => {
      window.location.reload()
    }, 800);
  }

  function handelSave(){
    dispatch(editTodo(obj))
  }

  return (
    <>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Edit Todo
    </Typography>
    <div style={{display:'flex', flexDirection:'column', gap:'25px', width:'80%', margin:'auto', marginTop:'20px', border:'1px solid grey', padding:'35px'}}>
    <TextField value={id} label="Todo Id" color="secondary" focused />
    <TextField onChange={(e)=> setTitle(e.target.value)} value={title} label="Todo Title" color="secondary" focused />
        <TextField onChange={(e)=> setDescription(e.target.value)} value={description} id="standard-basic" label="Todo Description" variant="standard" />
        <Button onClick={handelSave} color='primary' variant='contained'>Save</Button>
    </div>
   
  </Box>
</Modal>
    
    <div style={{textAlign:'left', paddingLeft:'15px'}}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p >Status: <span style={{color: item.status ? 'green' : 'red'}}>{item.status ? 'Completed' : 'Not Completed'}</span></p>
        <Button onClick={()=> handleOpen(item)} style={{marginLeft:'-15px'}}>Edit</Button>
        <Button onClick={()=> handleDelete(item._id)}>Delete</Button>
    </div>
    </>
  )
}

export default TodoCard
import React from 'react'
import { TextField, Button} from '@mui/material'

const Inputform = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'25px', width:'25%', margin:'auto', marginTop:'20px', border:'1px solid grey', padding:'35px'}}>
      
        <TextField label="Todo Title" color="secondary" focused />
        <TextField id="standard-basic" label="Todo Description" variant="standard" />
        <Button color='primary' variant='contained'>Add</Button>
    </div>
  )
}

export default Inputform
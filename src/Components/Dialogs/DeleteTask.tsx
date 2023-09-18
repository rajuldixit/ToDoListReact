import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

const DeleteTask = (props: any) => {
  const {handleClose, open} = props  
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to delete this task ?
        </DialogContentText>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined' color='primary'>Cancel</Button>
        <Button onClick={handleClose} variant='contained' color='error'>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteTask
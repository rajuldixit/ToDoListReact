import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material'
import React from 'react'
import { AddEditTask } from '../../Constants/utils'

const AddUpdate = (props: any) => {
  const {handleClose, open, title, type} = props  
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {
            type === AddEditTask.ADD ? 'Please add new task to your todo list' : 'Please update your todo task'
          }
        </DialogContentText>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>  
  )
}

export default AddUpdate
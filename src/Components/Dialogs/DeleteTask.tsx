import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../AppState/hooks'
import { removeTask } from '../../AppState/TODO/TodoSlice'

const DeleteTask = (props: any) => {
  const {handleClose, open, taskId} = props,
  dispatch = useAppDispatch(),
  deleteTask = () => {
    dispatch(removeTask({id: taskId}))
    handleClose()
  }
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
        <Button onClick={deleteTask} variant='contained' color='error'>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteTask
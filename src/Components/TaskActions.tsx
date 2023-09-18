import { Stack, Button } from '@mui/material'
import React from 'react'
import DeleteTask from './Dialogs/DeleteTask'
import { useAppDispatch } from '../AppState/hooks'
import { addTask, removeTask } from '../AppState/TODO/TodoSlice'

const TaskActions = () => {
  const [open, setOpen] = React.useState(false),
  dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(removeTask({id: 1}))
  };
  return (
    <Stack direction={'row'} flexDirection={'row'} spacing={2}>
      <Button variant='outlined' color='secondary'>Edit</Button>
      <Button variant='outlined' color='error' onClick={handleClickOpen}>Delete</Button>
      <DeleteTask open={open} handleClose={handleClose} />
    </Stack>
  )
}

export default TaskActions
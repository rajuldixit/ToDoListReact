import { Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import DeleteTask from './Dialogs/DeleteTask'
import { useAppDispatch } from '../AppState/hooks'
import { addTask, removeTask, updateTask } from '../AppState/TODO/TodoSlice'
import { AddEditTask } from '../Constants/utils'
import AddUpdate from './Dialogs/AddUpdate'

const TaskActions = () => {
  const [open, setOpen] = useState(false),
  [openEdit, setOpenEdit] = useState(false),
  dispatch = useAppDispatch()

  const handleEditClickOpen = () => {
    setOpenEdit(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(removeTask({id: 1}))
  };

  const handleEditClose = () => {
    setOpenEdit(false);
    dispatch(updateTask({id: 1, name: 'prajul', description: 'something', status: 'pending', dueDate: ''}))
  };

  return (
    <Stack direction={'row'} flexDirection={'row'} spacing={2} justifyContent={'end'}>
      <Button variant='outlined' color='secondary' onClick={handleEditClickOpen}>Edit</Button>
      <Button variant='outlined' color='error' onClick={handleClickOpen}>Delete</Button>
      <DeleteTask open={open} handleClose={handleClose} />
      <AddUpdate open={openEdit} handleClose={handleEditClose} title={'Edit Task'} type={AddEditTask.EDIT} />
    </Stack>
  )
}

export default TaskActions

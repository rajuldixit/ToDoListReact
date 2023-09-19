import { Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import DeleteTask from './Dialogs/DeleteTask'
import { AddEditTask } from '../Constants/utils'
import AddUpdate from './Dialogs/AddUpdate'

type Task = {
  id: number,
  name: string;
  description: string;
  dueDate: string;
  status: string 
}
const TaskActions = (props: {task:Task} ) => {
  const [open, setOpen] = useState(false),
  [openEdit, setOpenEdit] = useState(false),
  {task} = props,

  handleEditClickOpen = () => {
    setOpenEdit(true);
  },
  handleClickOpen = () => {
    setOpen(true);
  },

  handleClose = () => {
    setOpen(false);
  },

  handleEditClose = () => {
    setOpenEdit(false);
  }

  return (
    <Stack direction={'row'} flexDirection={'row'} spacing={2} justifyContent={'end'}>
      <Button variant='outlined' color='secondary' onClick={handleEditClickOpen}>Edit</Button>
      <Button variant='outlined' color='error' onClick={handleClickOpen}>Delete</Button>
      <DeleteTask open={open} handleClose={handleClose} taskId={task.id} />
      <AddUpdate open={openEdit} task={task} handleClose={handleEditClose} title={'Edit Task'} type={AddEditTask.EDIT} />
    </Stack>
  )
}

export default TaskActions

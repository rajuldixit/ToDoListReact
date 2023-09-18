import { Button, Stack} from '@mui/material'
import React from 'react'
import AddUpdate from './Dialogs/AddUpdate';
import { AddEditTask } from '../Constants/utils';
import { useAppDispatch } from '../AppState/hooks';
import { addTask } from '../AppState/TODO/TodoSlice';

const AddTask = () => {
  const [open, setOpen] = React.useState(false),
  dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(addTask({id: 1, name: 'rajul', description: 'something', status: 'pending', dueDate: ''}))
  };
    
  return (
    <Stack>
      <Button onClick={handleClickOpen}>Add Task</Button>
      <AddUpdate open={open} handleClose={handleClose} title={'Add Task'} type={AddEditTask.ADD} />
    </Stack>
  )
}

export default AddTask
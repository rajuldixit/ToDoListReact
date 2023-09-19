import { Button, Stack} from '@mui/material'
import React from 'react'
import AddUpdate from './Dialogs/AddUpdate';

type AddTaskProps = { 
  type: string
}

const AddTask = (props: AddTaskProps) => {

  const [open, setOpen] = React.useState(false),
  {type} = props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  return (
    <Stack>
      <Button sx={{width: '200px'}} onClick={handleClickOpen} variant='contained' color='secondary'>Add Task</Button>
      <AddUpdate open={open} handleClose={handleClose} type={type} />
    </Stack>
  )
}

export default AddTask
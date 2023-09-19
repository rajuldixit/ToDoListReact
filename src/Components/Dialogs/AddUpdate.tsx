import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AddEditTask } from '../../Constants/utils'
import { useForm } from 'react-hook-form';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomDropdown from '../CustomDropdown';
import { useAppDispatch } from '../../AppState/hooks';
import { addTask, updateTask } from '../../AppState/TODO/TodoSlice';
import moment from 'moment';

type FormData = {
  name: string;
  description: string;
  dueDate: Date;
  status: string 
};

const statusOption = [
  'New',
  'Hold',
  'Yet to Pick',
  'In progress',
  'Completed',
  'Cancelled'
];

type AddUpdateProps = {
  handleClose: (event: React.MouseEvent<HTMLElement>) => void,
  open: boolean,
  type: string,
  task?: {
    id: number,
    name: string;
    description: string;
    dueDate: string;
    status: string 
  }
}

const AddUpdate = (props: any) => {
  const {handleClose, open, type, task} = props,
  { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>(),
  [dueDate, setDueDate] = useState<any>(),
  [dateError, setDateError] = useState(false),
  [statusSelectedIndex, setStatusSelectedIndex] = useState(0),
  dispatch = useAppDispatch(),
  
  onSubmit = (data: FormData) => {  
    let taskObj = {
      name: data.name,
      description: data.description,
      dueDate: moment(dueDate).format('MM/DD/YYYY'),
      status: type === AddEditTask.EDIT ? data.status : 'New'
    } 
    console.log(type === AddEditTask.ADD,AddEditTask.ADD.toString(), type)
    if (type === AddEditTask.ADD.toString()) {
      dispatch(addTask(taskObj))
    } else if (type === AddEditTask.EDIT) {
      const updatedTaskObj = {...taskObj, id: task.id}
      dispatch(updateTask(updatedTaskObj))
    }
    handleClose()
  },
  handleDateError = () => {
    setDateError(true)
  },
  handleMenuSelection = (index: number) => {
    setValue('status', statusOption[index])
    setStatusSelectedIndex(index)
  }

  useEffect(() => {
    if(type === AddEditTask.EDIT && task) {
      const statusIndex = statusOption.indexOf(task.status)
      setStatusSelectedIndex(statusIndex)
      setValue('name', task.name)
      setValue('description', task.description)
      setDueDate(new Date(task.dueDate))
    }
  }, [type])
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{type === AddEditTask.EDIT ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>    
        <DialogContentText sx={{marginBottom: '16px'}}>
          {
            type === AddEditTask.ADD ? 
            <Typography>Please add new task to your todo list</Typography> : 
            <Typography>Please update your todo task</Typography>
          }
        </DialogContentText>
        <Stack spacing={2}>
          <TextField sx={{display: 'block'}} label="Name" variant="outlined" {...register("name", { required: true })} />
          {errors.name?.type === 'required' && <p role="alert" style={{color: 'red'}}>Name is required</p>}
          <TextField
            label="Description"
            multiline
            maxRows={4}
            sx={{display: 'block'}} 
            {...register("description", { required: true })}
          />
          {errors.description?.type === 'required' && <p role="alert" style={{color: 'red'}}>Description is required</p>}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Due Date"
              sx={{display: 'block'}} 
              minDate={new Date()}
              onError={handleDateError}
              value={dueDate}
              onChange={(date: any) => setDueDate(date)}
              slotProps={{
                textField: {
                  helperText: 'MM/DD/YYYY',
                  required: true
                },
              }}
            />
          </LocalizationProvider>
          {dateError ? <p role="alert" style={{color: 'red'}}>Date is required</p> : ''}
          {type === AddEditTask.EDIT && <CustomDropdown {...register('status')} title={'Status'} selectedIndex={statusSelectedIndex} options={statusOption} handleMenuItem={handleMenuSelection} />}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined' color='primary'>Cancel</Button>
        <Button type='submit' variant='contained' color='success'>Save</Button>
      </DialogActions>
      </form>
    </Dialog>  
  )
}

export default AddUpdate
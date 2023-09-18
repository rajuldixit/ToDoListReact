import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AddEditTask, TaskStatuses } from '../../Constants/utils'
import { useController, useForm } from 'react-hook-form';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomDropdown from '../CustomDropdown';

type FormData = {
  name: string;
  description: string;
  dueDate: Date;
  status: string 
};

const statusOption = [
  'Yet to Pick',
  'In progress',
  'Completed',
  'Cancelled'
]

const AddUpdate = (props: any) => {
  const {handleClose, open, title, type} = props,
  { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>(),
  [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
  [selectedIndex, setSelectedIndex] = useState(1),
  [dueDate, setDueDate] = useState(new Date()),
  openMenu = Boolean(anchorEl),
  handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  },

  handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  },

  handleMenuClose = () => {
    setAnchorEl(null);
  },
  onSubmit = (data: any) => {  
    console.log(data) 
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
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
          <TextField sx={{display: 'block'}} label="Name" variant="outlined" {...register("name")} />
          <TextField
            label="Description"
            multiline
            maxRows={4}
            sx={{display: 'block'}} 
            {...register("description")}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Due Date"
              sx={{display: 'block'}} 
              onChange={(date: any) => setDueDate(date)}
              slotProps={{
                textField: {
                  helperText: 'MM/DD/YYYY',
                },
              }}
            />
          </LocalizationProvider>
          {type === AddEditTask.EDIT && <CustomDropdown title={'Status'} options={statusOption} handleMenuItemClick={function (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number): void {
            throw new Error('Function not implemented.');
          } } />}
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
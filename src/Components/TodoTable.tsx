import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell, styled, tableCellClasses } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../AppState/hooks';
import TaskActions from './TaskActions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'rgb(199 105 175)',
      boxShadow: '0px 10px 20px 0px rgba(10, 17, 81, 0.04)',
      color: theme.palette.common.white,
      fontSize: 18
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const TodoTable = () => {
  const tasks = useAppSelector(state => state.todo.tasks)  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Due Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {tasks.map((task) => (
          <StyledTableRow key={task.name}>
            <StyledTableCell component="th" scope="task">
            {task.name}
            </StyledTableCell>
            <StyledTableCell align="right">{task.description}</StyledTableCell>
            <StyledTableCell align="right">{task.dueDate || ''}</StyledTableCell>
            <StyledTableCell align="right">{task.status}</StyledTableCell>
            <StyledTableCell align="right"><TaskActions task={task} /></StyledTableCell>
          </StyledTableRow>
        ))}
        </TableBody>
      </Table> 
    </TableContainer> 
  )
}

export default TodoTable
import { Box } from '@mui/material'
import React from 'react'
import AddTask from './AddTask'
import TodoTable from './TodoTable'

const Tasks = () => {
  return (
    <Box>
      <AddTask />
      <TodoTable />
    </Box>
  )
}

export default Tasks
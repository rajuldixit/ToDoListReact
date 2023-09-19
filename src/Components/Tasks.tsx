import { Box, Stack} from '@mui/material'
import React from 'react'
import AddTask from './AddTask'
import TodoTable from './TodoTable'
import { AddEditTask } from '../Constants/utils'

const Tasks = () => {
  return (
    <Stack spacing={2} padding={4} >
      <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
        <AddTask type={AddEditTask.ADD.toString()} />
      </Box>
      <TodoTable />
    </Stack>
  )
}

export default Tasks
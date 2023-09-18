import { Box, Stack} from '@mui/material'
import React from 'react'
import AddTask from './AddTask'
import TodoTable from './TodoTable'

const Tasks = () => {
  return (
    <Stack spacing={2} padding={4} boxSizing={'border-box'}>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
        <AddTask />
      </Box>
      <TodoTable />
    </Stack>
  )
}

export default Tasks
import { Box, Typography } from '@mui/material'
import React from 'react'
import AddTask from './AddTask'

const NoTasks = () => {
  return (
    <Box>
      <Typography>Hey... Looks like there is no task for you. Why don't you create one.</Typography>
      <AddTask />
    </Box>
  )
}

export default NoTasks
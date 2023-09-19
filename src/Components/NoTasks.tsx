import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import AddTask from './AddTask'
import { AddEditTask } from '../Constants/utils'

const NoTasks = () => {
  return (
    <Stack spacing={4} padding={4} boxSizing={'border-box'}>
      <Typography textAlign={'center'}>Hey... Looks like there is no task for you. Why don't you create one.</Typography>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
        <AddTask type={AddEditTask.ADD.toString()} />
      </Box>
    </Stack>
  )
}

export default NoTasks
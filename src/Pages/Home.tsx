import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../AppState/hooks';
import { loading } from '../AppState/TODO/TodoSlice';
import NoTasks from '../Components/NoTasks';
import Tasks from '../Components/Tasks';

const Home = () => {
  const tasks = useAppSelector(state => state.todo.tasks)
  console.log(tasks)
  return (
    <Box>
       {
        tasks && tasks.length === 0 ? <NoTasks /> : <Tasks />
       }
    </Box>
  )
}

export default Home
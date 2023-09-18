import { createSlice } from '@reduxjs/toolkit'

type Task = {
    id: number
    name: string
    description: string
    status: string
    dueDate: string
}
type InitialState = {
    loading: boolean
    tasks: Task[]
    error: string
}
const initialState: InitialState = {
    loading: false,
    tasks: [],
    error: ''
}

const todoSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    loading(state) {
      state.loading = true
      state.error = ''
    }, 
    addTask(state, action) {
      state.loading = false
      state.tasks = [action.payload, ...state.tasks];
    },
    removeTask(state, action) {
      const { id } = action.payload; 
      state.tasks = state.tasks.filter(item => item.id !== id)
    },
    error(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong'
    },
    updateTask: (state, action) => {
      const {id} = action.payload
      state.tasks = state.tasks.map(task => 
        task.id === id ? 
            {...state.tasks, ...action.payload} : task )
    }   
  }
});

export const { loading, error, addTask, removeTask, updateTask } = todoSlice.actions

export default todoSlice.reducer
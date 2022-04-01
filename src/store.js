import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './store/employee'

export default configureStore({
  reducer: {
      employee: employeeReducer,
  },
})
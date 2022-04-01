import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        create: null,
        list: []
    },
    reducers: {
        create:(state, action)=>{
            state.create = action.payload
            state.list.push(action.payload)
        }
    },
})

export const { create } = employeeSlice.actions

export default employeeSlice.reducer
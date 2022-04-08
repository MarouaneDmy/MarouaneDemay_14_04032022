import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        list: []
    },
    reducers: {
        /* A reducer function. It is a function that takes in the current state and an action and
        returns a new state. */
        create:(state, action)=>{
            state.list.push(action.payload)
        }
    },
})

export const { create } = employeeSlice.actions

export default employeeSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state) => {
            state.value = !(state.value)
        },
       
    },
})

export const { toggle } = counterSlice.actions

export default counterSlice.reducer
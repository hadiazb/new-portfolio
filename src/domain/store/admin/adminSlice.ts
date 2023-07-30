import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AdminState {
    value: number
}

const initialState: AdminState = {
    value: 0,
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// Actions Creators
export const { increment, decrement, incrementByAmount } = adminSlice.actions

// Reducers
export default adminSlice.reducer

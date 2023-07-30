import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    value: number
}

const initialState: AuthState = {
    value: 0,
}

export const authSlice = createSlice({
    name: 'auth',
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
export const { increment, decrement, incrementByAmount } = authSlice.actions

// Reducers
export default authSlice.reducer

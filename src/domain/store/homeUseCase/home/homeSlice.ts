import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HomeState {
    value: number
}

const initialState: HomeState = {
    value: 0,
}

export const homeSlice = createSlice({
    name: 'home',
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
export const { increment, decrement, incrementByAmount } = homeSlice.actions

// Reducers
export default homeSlice.reducer

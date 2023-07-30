import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
    value: number
}

const initialState: ThemeState = {
    value: 0,
}

export const themeSlice = createSlice({
    name: 'theme',
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
export const { increment, decrement, incrementByAmount } = themeSlice.actions

// Reducers
export default themeSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

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
    },
})

// Actions Creators
export const { increment } = themeSlice.actions

// Reducers
export default themeSlice.reducer

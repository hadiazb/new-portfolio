import { createSlice } from '@reduxjs/toolkit'

export interface ModalsState {
    value: number
}

const initialState: ModalsState = {
    value: 0,
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        show: (state) => {
            state.value += 1
        },
    },
})

// Actions Creators
export const { show } = modalsSlice.actions

// Reducers
export default modalsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export interface ModalsState {
    show: boolean
}

const initialState: ModalsState = {
    show: false,
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        onShow: (state) => {
            state.show = true
        },
        onHire: (state) => {
            state.show = false
        },
    },
})

// Actions Creators
export const { onHire, onShow } = modalsSlice.actions

// Reducers
export default modalsSlice.reducer

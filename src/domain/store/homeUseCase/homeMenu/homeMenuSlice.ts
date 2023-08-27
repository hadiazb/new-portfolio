import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HomeMenuState {
    value: number
}

const initialState: HomeMenuState = {
    value: 0,
}

export const homeMenuSlice = createSlice({
    name: 'homeMenu',
    initialState,
    reducers: {
        onChangeOption: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

// Actions Creators
export const { onChangeOption } = homeMenuSlice.actions

// Reducers
export default homeMenuSlice.reducer

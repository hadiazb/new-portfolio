import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// interfaces
import { Option } from '@/infrastructure/ui/components/ui/MobileMenu/MobileMenu'

export interface HomeContentState {
    options: Option[]
    loading: boolean
    error: unknown
}

const initialState: HomeContentState = {
    error: null,
    loading: false,
    options: [],
}

export const homeContentSlice = createSlice({
    name: 'homeContent',
    initialState,
    reducers: {
        onError: (state) => {
            state.loading = false
            state.error = 'hay error'
        },
        onLoading: (state) => {
            state.loading = true
        },
        onLoad: (state, action: PayloadAction<Option[]>) => {
            state.options = action.payload
            state.loading = false
        },
    },
})

// Actions Creators
export const { onLoad, onLoading, onError } = homeContentSlice.actions

// Reducers
export default homeContentSlice.reducer

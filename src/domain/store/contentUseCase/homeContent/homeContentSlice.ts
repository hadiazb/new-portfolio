import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { Option } from '@/infrastructure/ui/components/ui/MobileMenu/MobileMenu'

export interface HomeContentState {
    options: Option[]
}

const initialState: HomeContentState = {
    options: [
        {
            label: 'About Me',
            fontSize: 11,
            icon: 'Person2',
        },
        {
            label: 'Projects',
            fontSize: 11,
            icon: 'Work',
        },
        {
            label: 'Blog',
            fontSize: 11,
            icon: 'Notifications',
        },
        {
            label: 'Tutorial',
            fontSize: 11,
            icon: 'Lightbulb',
        },
    ],
}

export const homeContentSlice = createSlice({
    name: 'homeContent',
    initialState,
    reducers: {
        get: (state) => {
            state.options = { ...state.options }
        },
    },
})

// Actions Creators
export const { get } = homeContentSlice.actions

// Reducers
export default homeContentSlice.reducer

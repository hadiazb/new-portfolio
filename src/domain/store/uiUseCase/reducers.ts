import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice, modalsSlice } from '../uiUseCase'

export const uiReducers = combineReducers({
    theme: themeSlice.reducer,
    modals: modalsSlice.reducer,
})

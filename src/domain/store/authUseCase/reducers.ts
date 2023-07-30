import { combineReducers } from '@reduxjs/toolkit'

import { adminSlice } from '../adminUseCase'

export const authReducers = combineReducers({
    auth: adminSlice.reducer,
})

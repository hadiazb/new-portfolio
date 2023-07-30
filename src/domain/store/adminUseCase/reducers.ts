import { combineReducers } from '@reduxjs/toolkit'

import { adminSlice } from '../adminUseCase'

export const adminReducers = combineReducers({
    admin: adminSlice.reducer,
})

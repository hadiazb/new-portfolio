import { combineReducers } from '@reduxjs/toolkit'

import { adminSlice } from './admin'

export const rootReducers = combineReducers({
    admin: adminSlice.reducer,
})

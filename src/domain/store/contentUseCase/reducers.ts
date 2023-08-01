import { combineReducers } from '@reduxjs/toolkit'

import { homeContentSlice } from '../contentUseCase'

export const contentReducers = combineReducers({
    homeContent: homeContentSlice.reducer,
})

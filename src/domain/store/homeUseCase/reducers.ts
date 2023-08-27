import { combineReducers } from '@reduxjs/toolkit'

import { homeMenuSlice, homeSlice } from '../homeUseCase'

export const homeReducers = combineReducers({
    home: homeSlice.reducer,
    homeMenu: homeMenuSlice.reducer,
})

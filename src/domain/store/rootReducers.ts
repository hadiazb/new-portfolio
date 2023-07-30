import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import { adminPersistConfig, adminReducers } from './adminUseCase'
import { authPersistConfig, authReducers } from './authUseCase'
import { uiPersistConfig, uiReducers } from './uiUseCase'

export const rootReducers = combineReducers({
    adminModule: persistReducer(adminPersistConfig, adminReducers),
    authModule: persistReducer(authPersistConfig, authReducers),
    uiModule: persistReducer(uiPersistConfig, uiReducers),
})

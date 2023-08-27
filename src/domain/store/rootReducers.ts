import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import { adminPersistConfig, adminReducers } from './adminUseCase'
import { authPersistConfig, authReducers } from './authUseCase'
import { uiPersistConfig, uiReducers } from './uiUseCase'
import { contentPersistConfig, contentReducers } from './contentUseCase'
import { homePersistConfig, homeReducers } from './homeUseCase'

export const rootReducers = combineReducers({
    adminModule: persistReducer(adminPersistConfig, adminReducers),
    homeModule: persistReducer(homePersistConfig, homeReducers),
    authModule: persistReducer(authPersistConfig, authReducers),
    uiModule: persistReducer(uiPersistConfig, uiReducers),
    contentModule: persistReducer(contentPersistConfig, contentReducers),
})

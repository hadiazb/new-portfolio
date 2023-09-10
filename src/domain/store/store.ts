import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'

// reducers
import { rootReducers } from './rootReducers'

// persist config
import { persistConfig } from './rootPersistConfig'

// middleware
import { rootMiddleware } from './rootMiddleware'

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    devTools:  (process.env.NODE_ENV !== 'development') ? false : true,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([rootMiddleware]),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

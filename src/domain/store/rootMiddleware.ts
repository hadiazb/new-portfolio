import { Action, AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'

export const rootMiddleware =
    (store: MiddlewareAPI) =>
    (next: Dispatch) =>
    (action: AnyAction): Action => {
        const globalState = store.getState()
        if (globalState) {
            return next(action)
        }
        return next(action)
    }

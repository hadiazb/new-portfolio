import createSelector from '../createSelector'
import type { RootState } from '../store'

export const themeSelector = createSelector(
    (state: RootState) => state.uiModule,
    ({ theme }) => theme,
)

export const modalsSelector = createSelector(
    (state: RootState) => state.uiModule,
    ({ modals }) => modals,
)

import createSelector from '../createSelector'
import type { RootState } from '../store'

export const themeSelector = createSelector(
    (state: RootState) => state.ui,
    ({ theme }) => theme,
)

export const modalsSelector = createSelector(
    (state: RootState) => state.ui,
    ({ modals }) => modals,
)

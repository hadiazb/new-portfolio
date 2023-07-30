import createSelector from '../createSelector'
import type { RootState } from '../store'

export const authSelector = createSelector(
    (state: RootState) => state.auth,
    ({ auth }) => auth,
)

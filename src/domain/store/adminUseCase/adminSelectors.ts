import createSelector from '../createSelector'
import type { RootState } from '../store'

export const adminSelector = createSelector(
    (state: RootState) => state.adminModule,
    ({ admin }) => admin,
)

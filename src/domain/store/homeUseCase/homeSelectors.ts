import createSelector from '../createSelector'
import type { RootState } from '../store'

export const homeSelector = createSelector(
    (state: RootState) => state.homeModule,
    ({ home }) => home,
)

export const homeMenuSelector = createSelector(
    (state: RootState) => state.homeModule,
    ({ homeMenu }) => homeMenu,
)

import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@redux/store'

export const selectRoot = (state: RootState) => state

export const selectUser = createSelector(selectRoot, (state) => state.user)

export const selectCalculatorDisplay = createSelector(
  selectRoot,
  (state) => state.calculator.display,
)

export const selectCalculatorHistory = createSelector(
  selectRoot,
  (state) => state.calculator.history,
)

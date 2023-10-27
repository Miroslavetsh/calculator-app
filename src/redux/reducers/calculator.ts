import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { CalculatorState } from '@models/index'

const initialState: CalculatorState = {
  display: '',
  history: [],
  error: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateDisplay: (state, { payload }: PayloadAction<string>) => {
      if (payload === '=') {
        try {
          const display = eval(state.display).toString()
          return { ...state, display }
        } catch (error) {
          return { ...state, error: 'Invalid Input' }
        }
      } else {
        const display = state.display.concat(payload)

        return { ...state, display }
      }
    },
    remember: (state, { payload }: PayloadAction<string>) => {
      const { history: oldHistory } = state
      const history = [...oldHistory]

      if (oldHistory.length >= 20) {
        history.shift()
        history.push(payload)

        return { ...state, history }
      } else {
        history.push(payload)
        return { ...state, history }
      }
    },
    clearHistory: (state) => ({ ...state, history: [] }),
    clearDisplay: (state) => ({ ...state, display: '', error: '' }),
    clear: () => initialState,
  },
})

export const { updateDisplay, remember, clearHistory, clearDisplay, clear } =
  calculatorSlice.actions

export default calculatorSlice.reducer

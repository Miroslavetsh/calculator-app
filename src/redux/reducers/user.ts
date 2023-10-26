import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { UserState } from '@models/index'

const initialState: UserState = { username: '', email: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      username: payload,
    }),
    updateEmail: (state, { payload }) => ({
      ...state,
      email: payload,
    }),
    clear: () => initialState,
  },
})

export const { updateEmail, updateUsername, clear } = userSlice.actions

export default userSlice.reducer

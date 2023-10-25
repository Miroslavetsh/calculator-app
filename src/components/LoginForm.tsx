import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserUpdateActions } from '@models/index'
import { Input } from '@components/index'

type UserState = {
  username: string
  email: string
}

type UserAction = {
  type: UserUpdateActions
  payload: string
}

function userReducer(state: UserState, action: UserAction) {
  const { type, payload } = action

  switch (type) {
    case UserUpdateActions.USERNAME:
      return {
        ...state,
        username: payload,
      }
    case UserUpdateActions.EMAIL:
      return {
        ...state,
        email: payload,
      }
    default:
      return state
  }
}

const LoginForm: React.FC = () => {
  const [{ username, email }, dispatch] = useReducer(userReducer, {
    username: '',
    email: '',
  })

  const navigate = useNavigate();

  const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: UserUpdateActions.USERNAME, payload: e.target.value })
  }

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: UserUpdateActions.EMAIL, payload: e.target.value })
  }

  const fakeAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // TODO: Connect with state manager & Provide validation
    navigate('/main')
  }

  return (
    <form onSubmit={fakeAuth}>
      <Input
        label='Username'
        value={username}
        type='text'
        onChange={updateUsername}
        placeholder='Enter username'
      />
      <Input
        label='Email'
        value={email}
        onChange={updateEmail}
        type='text'
        placeholder='Enter username'
      />

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        type='submit'>
        Submit
      </button>
    </form>
  )
}

export default LoginForm

import React from 'react'
import { useNavigate } from 'react-router-dom'

import { updateEmail, updateUsername } from '@redux/reducers/user'
import { selectUser } from '@redux/selectors'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { Button, Input } from '@components/index'

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const { username, email } = useAppSelector(selectUser)
  const navigate = useNavigate()

  // TODO: Use debounce
  const updateUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUsername(e.target.value))
  }

  const updateEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmail(e.target.value))
  }

  const fakeAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //TODO: validate credentials here as well
    navigate('/main?tab=calculator')
  }

  return (
    <form onSubmit={fakeAuth}>
      <Input
        label='Username'
        value={username}
        type='text'
        onChange={updateUsernameHandler}
        placeholder='Enter username'
      />
      <Input
        label='Email'
        value={email}
        onChange={updateEmailHandler}
        type='text'
        placeholder='Enter email'
      />

      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default LoginForm

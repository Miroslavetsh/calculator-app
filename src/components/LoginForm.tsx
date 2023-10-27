import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { updateEmail, updateUsername } from '@redux/reducers/user'
import { selectUser } from '@redux/selectors'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { Button, Input } from '@components/index'

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const { username, email } = useAppSelector(selectUser)
  const [errors, setErrors] = useState({
    username: '',
    email: '',
  })

  const usernameSatisfying = username.length >= 3
  const emailLengthSatisfying = email.length >= 6
  const emailMatchesPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

  const usernameValid = usernameSatisfying
  const emailValid = emailLengthSatisfying && emailMatchesPattern

  const navigate = useNavigate()

  const setUsernameError = (username: string) => setErrors((prev) => ({ ...prev, username }))
  const clearUsernameError = () => setUsernameError('')
  const setEmailError = (email: string) => setErrors((prev) => ({ ...prev, email }))
  const clearEmailError = () => setEmailError('')

  const checkValidity = () => {
    if (emailValid) clearEmailError()
    if (usernameValid) clearUsernameError()
  }

  useEffect(() => {
    checkValidity()
  }, [username, email])

  // TODO: Use debounce
  const updateUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUsername(e.target.value))
  }

  const updateEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmail(e.target.value))
  }

  const fakeAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!usernameSatisfying) setUsernameError('3+ chars')

    if (!emailMatchesPattern) setEmailError('Should match email pattern')
    if (!emailLengthSatisfying) setEmailError('6+ chars')

    if (emailValid && usernameValid) navigate('/main?tab=calculator')
  }

  return (
    <form onSubmit={fakeAuth}>
      <Input
        data-testId='username-field'
        label='Username'
        value={username}
        onChange={updateUsernameHandler}
        error={errors.username}
        type='text'
        placeholder='Enter username'
      />
      <Input
        data-testId='email-field'
        label='Email'
        error={errors.email}
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

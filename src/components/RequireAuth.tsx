import { useLocation, Navigate } from 'react-router-dom'

import { useAuth } from '@hooks/index'

type PropTypes = {
  children?: React.ReactNode
}

// TODO: Provide validation for credentials here
const RequireAuth: React.FC<PropTypes> = ({ children }) => {
  const { username, email } = useAuth()
  const location = useLocation()

  const emptyCredentials = !username || !email

  if (emptyCredentials) {
    return <Navigate to='/login' state={{ from: location }} replace />
  } else {
    return children
  }
}

export default RequireAuth

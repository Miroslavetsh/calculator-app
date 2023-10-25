import { useLocation, Navigate } from 'react-router-dom'

import { useAuth } from '@hooks/index'

type PropTypes = {
  children?: React.ReactNode
}

const RequireAuth: React.FC<PropTypes> = ({ children }) => {
  const { username } = useAuth()
  const location = useLocation()

  if (!username) {
    return <Navigate to='/' state={{ from: location }} replace />
  } else {
    return children
  }
}

export default RequireAuth

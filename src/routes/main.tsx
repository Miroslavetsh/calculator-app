import { useNavigate } from 'react-router-dom'

import { clear as clearUser } from '@redux/reducers/user'
import { selectUser } from '@redux/selectors'
import useAppSelector from '@hooks/useAppSelector'
import useAppDispatch from '@hooks/useAppDispatch'
import { Button, RequireAuth } from '@components/index'

export default function Main() {
  const { username } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(clearUser())
    navigate('/login')
  }

  return (
    // TODO: Make a Page layout
    <RequireAuth>
      <div className='container max-w-7xl mx-auto h-screen'>
        <header className='flex justify-between py-2'>
          <div className='flex gap-2'>
            <Button>History</Button>
            <Button>Calculator</Button>
          </div>

          <div className='flex gap-2 items-center'>
            <Button onClick={logout}>Logout</Button>
            <p>
              Hello, <span className='text-[yellow]'>{username}</span>
            </p>
          </div>
        </header>
        <div className='flex justify-center items-center py-36'>
          Calculator
          {/* <Button>clear history</Button> */}
        </div>
      </div>
    </RequireAuth>
  )
}

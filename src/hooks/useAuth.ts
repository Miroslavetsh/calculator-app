import { selectUser } from '@redux/selectors'
import { useAppSelector } from '@hooks/index'

const useAuth = () => ({ ...useAppSelector(selectUser) })

export default useAuth

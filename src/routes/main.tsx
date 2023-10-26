import { useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Tabs } from '@models/index'
import { clear as clearUser } from '@redux/reducers/user'
import { selectUser } from '@redux/selectors'
import { useAppSelector, useAppDispatch } from '@hooks/index'
import { Button, Calculator, History, RequireAuth } from '@components/index'
import { capitalize } from '@utils/index'

const tabs = { [Tabs.CALCULATOR]: <Calculator />, [Tabs.HISTORY]: <History /> }

export default function Main() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.CALCULATOR)

  const { username } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // console.log('herrere')
    // console.log(query.set('tab', 'calc'))
    const queryTabName = searchParams.get('tab') as Tabs
    console.log(queryTabName)
    if (Object.values(Tabs).includes(queryTabName)) setActiveTab(queryTabName)
  }, [activeTab])

  const logout = useCallback(() => {
    dispatch(clearUser())
    navigate('/login')
  }, [])

  const getOnTabClickHandler = useCallback(
    (tab: Tabs) => {
      return () => {
        if (activeTab !== tab) {
          setActiveTab(tab)
          setSearchParams({ tab })
        }
      }
    },
    [activeTab],
  )

  const getButtonClassName = (tab: Tabs) =>
    cn({
      ['cursor-not-allowed hover:bg-blue-500']: activeTab === tab,
      ['bg-transparent border-blue-500 border ']: activeTab !== tab,
    })

  return (
    // TODO: Make a Page layout
    <RequireAuth>
      <div className='container max-w-7xl mx-auto h-screen'>
        <header className='flex justify-between py-2'>
          <div className='flex gap-2'>
            {Object.values(Tabs).map((tab: Tabs) => {
              return (
                <Button className={getButtonClassName(tab)} onClick={getOnTabClickHandler(tab)}>
                  {capitalize(tab)}
                </Button>
              )
            })}
          </div>

          <div className='flex gap-2 items-center'>
            <Button onClick={logout}>Logout</Button>
            <p>
              Hello, <span className='text-[yellow]'>{username}</span>
            </p>
          </div>
        </header>
        <div className='flex justify-center items-center py-36'>{tabs[activeTab]}</div>
      </div>
    </RequireAuth>
  )
}

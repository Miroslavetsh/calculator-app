import useAppSelector from '@hooks/useAppSelector'
import { selectCalculatorHistory } from '@redux/selectors'
import { Button } from '@components/index'
import { clearHistory as clearHistoryReducer } from '@redux/reducers/calculator'
import useAppDispatch from '@hooks/useAppDispatch'

const History: React.FC = () => {
  const history = useAppSelector(selectCalculatorHistory)

  const dispatch = useAppDispatch()

  const clearHistory = () => {
    dispatch(clearHistoryReducer())
  }

  return (
    <div className='flex flex-col justify-center -mt-20'>
      {history.length ? (
        <ol className='pl-8 px-4 py-4 rounded-md bg-[#171717] leading-6'>
          {history.map((item, index) => {
            return (
              <li className='list-decimal' key={item.concat(`${index}`)}>
                <strong className='text-red-500'>{item}</strong>
              </li>
            )
          })}
        </ol>
      ) : (
        <p>No history here, start calculating 😉</p>
      )}
      <Button onClick={clearHistory} className='max-w-[200px] mx-auto mt-3'>
        Clear History
      </Button>
    </div>
  )
}

export default History

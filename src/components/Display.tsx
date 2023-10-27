import cn from 'classnames'

import { useAppSelector } from '@hooks/index'
import { selectCalculatorDisplay, selectCalculatorError } from '@redux/selectors'

const Display: React.FC = () => {
  const display = useAppSelector(selectCalculatorDisplay)
  const error = useAppSelector(selectCalculatorError)

  return (
    <div className='my-4 text-center'>
      {/* TODO: Implement native keyboard */}
      {/* <p className='mb-2 text-gray-500'>Allowed to use native keyboard</p> */}
      <input
        data-testId='display'
        className={cn('bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded w-full', {
          'text-red-500': error.length > 0,
        })}
        type='text'
        value={error.length ? error : display}
        readOnly
      />
    </div>
  )
}

export default Display

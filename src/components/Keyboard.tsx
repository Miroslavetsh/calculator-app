import { digits, operations } from '@data/index'
import { hasDataset } from '@utils/index'
import useAppDispatch from '@hooks/useAppDispatch'
import { remember, updateDisplay } from '@redux/reducers/calculator'

const Keyboard: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleKeyboardClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (hasDataset(evt.target)) {
      //TODO: Implement displaying and calculating
      dispatch(updateDisplay(evt.target.dataset.value))
      dispatch(remember(evt.target.dataset.value))
    }
  }

  return (
    //TODO: Make a pulse animation on keyPress
    <div className='max-w-[280px] mx-auto my-8 p-4 border rounded-lg shadow-md bg-transparent'>
      <div className='grid grid-cols-3 gap-4' onClick={handleKeyboardClick}>
        <div className='col-span-2'>
          <div className='grid grid-cols-3 gap-4'>
            {digits.map((digit, index) => (
              <button
                key={index}
                className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none'
                data-value={digit}>
                {digit}
              </button>
            ))}
          </div>
        </div>
        <div className='col-span-1'>
          <div className='grid grid-rows-4 gap-4'>
            {operations.map((operation, index) => (
              <button
                key={index}
                data-value={operation}
                className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                {operation}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keyboard

import { Button, Display, Keyboard } from '@components/index'
import useAppDispatch from '@hooks/useAppDispatch'
import { clearDisplay as clearDisplayReducer } from '@redux/reducers/calculator'

const Calculator: React.FC = () => {
  const dispatch = useAppDispatch()

  const clearDisplay = () => dispatch(clearDisplayReducer())

  return (
    <div className='bg-[#191919] px-4 py-4 rounded-md flex flex-col'>
      <Display />
      <Keyboard />

      <Button onClick={clearDisplay} className='max-w-[200px] mx-auto mt-3'>
        Clear Calculator
      </Button>
    </div>
  )
}

export default Calculator

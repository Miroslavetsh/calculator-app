import { Display, Keyboard } from '@components/index'

const Calculator: React.FC = () => {
  return (
    <div className='bg-[#191919] px-4 py-8 rounded-md pb-2'>
      <Display />
      <Keyboard />
    </div>
  )
}

export default Calculator

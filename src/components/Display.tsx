const Display: React.FC = () => {
  return (
    <div className='my-4 text-center'>
      {/* TODO: Implement native keyboard */}
      {/* <p className='mb-2 text-gray-500'>Allowed to use native keyboard</p> */}
      <input
        className='bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded w-full'
        type='text'
        // value={display}
        readOnly
      />
    </div>
  )
}

export default Display

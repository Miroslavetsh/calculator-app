import React, { InputHTMLAttributes } from 'react'

const Input: React.FC<
  InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }
> = ({ label, error, ...props }) => {
  return (
    // TODO: Use classnames on each ui component
    <div className='mb-4'>
      {error ? (
        <label className='block text-red-500 text-sm font-bold mb-2'>{error}</label>
      ) : (
        label && <label className='block text-gray-400 text-sm font-bold mb-2'>{label}</label>
      )}

      <input
        {...props}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  )
}

export default Input

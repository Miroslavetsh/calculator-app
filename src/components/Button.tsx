import cn from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
        className,
      )}
      {...props}
    />
  )
}

export default Button
